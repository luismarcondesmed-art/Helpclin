// Esta função agora lida com duas tarefas:
// 1. GET /api/config: Fornece a configuração do Firebase para o front-end.
// 2. POST /api/gemini: Atua como um proxy seguro para a API do Gemini.

exports.handler = async (event, context) => {
    // Rota para buscar a configuração do Firebase
    if (event.path.endsWith('/config') && event.httpMethod === 'GET') {
        try {
            const firebaseConfig = process.env.FIREBASE_CONFIG;
            if (!firebaseConfig) {
                throw new Error("A variável de ambiente FIREBASE_CONFIG não está definida no Netlify.");
            }
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: firebaseConfig,
            };
        } catch (error) {
            console.error('Erro ao buscar config do Firebase:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: error.message }),
            };
        }
    }

    // Rota para o proxy da API Gemini
    if (event.path.endsWith('/gemini') && event.httpMethod === 'POST') {
        try {
            const { prompt, systemInstruction, useGrounding, model } = JSON.parse(event.body);
            const apiKey = process.env.GEMINI_API_KEY;

            if (!apiKey) {
                throw new Error("A variável de ambiente GEMINI_API_KEY não está definida no Netlify.");
            }

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
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorBody = await response.text();
                console.error("Erro da API do Google:", errorBody);
                throw new Error(`Erro na API do Gemini: ${response.statusText}`);
            }

            const data = await response.json();
            return {
                statusCode: 200,
                body: JSON.stringify(data),
            };
        } catch (error) {
            console.error('Erro no proxy do Gemini:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: error.message }),
            };
        }
    }

    // Se nenhuma rota corresponder
    return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Rota não encontrada.' }),
    };
};

