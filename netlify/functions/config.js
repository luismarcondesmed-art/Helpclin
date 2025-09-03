// Usamos a sintaxe exports.handler para garantir compatibilidade máxima.
exports.handler = async function(event, context) {
  // Log para confirmar que a função foi chamada.
  console.log("A função 'config' foi chamada.");

  const firebaseConfig = process.env.FIREBASE_CONFIG;

  if (!firebaseConfig) {
    console.error("ERRO: A variável de ambiente FIREBASE_CONFIG não foi encontrada no Netlify.");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "A configuração do servidor Firebase não foi encontrada. Verifique as variáveis de ambiente no Netlify." }),
    };
  }

  // Log para confirmar que a variável foi lida com sucesso.
  console.log("A variável FIREBASE_CONFIG foi lida com sucesso.");

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: firebaseConfig, // Retorna a string JSON diretamente.
  };
};

