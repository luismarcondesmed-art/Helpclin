// Esta é uma versão atualizada com mais logs para facilitar a depuração.

exports.handler = async function(event) {
  console.log("Iniciando a função gemini-proxy...");

  if (event.httpMethod !== 'POST') {
    console.log("Método não permitido:", event.httpMethod);
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { prompt, systemInstruction, useGrounding, model } = JSON.parse(event.body);
    console.log("Recebido - Modelo:", model, "Prompt:", prompt ? prompt.substring(0, 50) + '...' : 'N/A');

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("ERRO: Chave de API não configurada nas variáveis de ambiente do Netlify.");
      return { statusCode: 500, body: JSON.stringify({ error: 'Chave de API do servidor não configurada.' }) };
    }
    console.log("Chave de API encontrada.");
    
    if (!model || !prompt) {
        console.error("ERRO: Modelo ou prompt ausentes no corpo da requisição.");
        return { statusCode: 400, body: JSON.stringify({ error: 'Modelo e prompt são obrigatórios.' }) };
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    console.log("Chamando a URL da API do Gemini:", apiUrl.replace(apiKey, '********')); // Log sem a chave

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
    };

    if (useGrounding) {
        payload.tools = [{ "google_search": {} }];
    }

    if (systemInstruction) {
        payload.systemInstruction = { parts: [{ text: systemInstruction }] };
    }
    
    if (model === 'gemini-2.5-flash-preview-tts') {
        payload.generationConfig = {
            responseModalities: ["AUDIO"],
        };
    }

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error("Erro ao chamar a API do Gemini:", response.status, errorBody);
        return { statusCode: response.status, body: JSON.stringify({ error: `Falha ao buscar da API do Gemini. Status: ${response.status}`, details: errorBody }) };
    }

    const data = await response.json();
    console.log("Resposta da API do Gemini recebida com sucesso.");

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

  } catch (error) {
    console.error('Erro geral no proxy:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro Interno do Servidor', details: error.message })
    };
  }
};

