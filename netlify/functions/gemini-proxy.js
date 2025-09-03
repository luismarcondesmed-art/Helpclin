// Esta função age como um intermediário seguro entre o seu site e a API do Gemini.
// Ela é executada em um servidor da Netlify, não no navegador do usuário.

exports.handler = async function(event) {
  // Somente permite requisições do tipo POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { prompt, systemInstruction, useGrounding, model } = JSON.parse(event.body);
    
    // Pega a chave de API de forma segura das variáveis de ambiente do Netlify.
    // A chave NUNCA é exposta ao público.
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured.' }) };
    }
    
    if (!model || !prompt) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Model and prompt are required.' }) };
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
    };

    if (useGrounding) {
        payload.tools = [{ "google_search": {} }];
    }

    if (systemInstruction) {
        payload.systemInstruction = { parts: [{ text: systemInstruction }] };
    }
    
    // Adiciona configuração de áudio para o modelo TTS
    if (model === 'gemini-2.5-flash-preview-tts') {
        payload.generationConfig = {
            responseModalities: ["AUDIO"],
        };
    }

    // Faz a chamada para a API do Google a partir do servidor
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error('Gemini API Error:', errorBody);
        return { statusCode: response.status, body: JSON.stringify({ error: 'Failed to fetch from Gemini API.' }) };
    }

    const data = await response.json();

    // Retorna a resposta da API do Google para o seu site
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

  } catch (error) {
    console.error('Proxy Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
