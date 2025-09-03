exports.handler = async (event, context) => {
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
};
