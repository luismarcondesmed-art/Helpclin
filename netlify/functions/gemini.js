// Usamos a sintaxe exports.handler para garantir compatibilidade máxima.
exports.handler = async function(event, context) {
  // Apenas permite pedidos do tipo POST.
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  
  // Log para confirmar que a função foi chamada.
  console.log("A função 'gemini' foi chamada.");

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("ERRO: A variável de ambiente GEMINI_API_KEY não foi encontrada no Netlify.");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "A chave da API do Gemini não está configurada no servidor." }),
    };
  }

  try {
    const { prompt, systemInstruction, useGrounding, model } = JSON.parse(event.body);
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
    };

    if (useGrounding) {
      payload.tools = [{ "google_search": {} }];
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Erro da API do Google: ${response.status}`, errorBody);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `Falha na comunicação com a API do Gemini. Detalhes: ${errorBody}` })
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error("Erro interno na função 'gemini':", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

