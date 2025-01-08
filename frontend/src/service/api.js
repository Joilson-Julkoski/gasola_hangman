import { backendUrl } from "../consts";

export const sortNewWordAPI = async () => {
    try {
        const resp = await fetch(`${backendUrl}/generateWord`);
        if (resp.status === 200) {
            return await resp.json();
        } else {
            console.error("Erro ao sortear palavra");
        }
    } catch (error) {
        console.error("Erro na API de sortear palavra:", error);
    }
};

export const getTopThreeAPI = async () => {

    try {
        const resp = await fetch(`${backendUrl}/getScores`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (resp.status === 200) {
            return await resp.json();
        } else {
            console.error("Erro ao consultar top 3");
        }
    } catch (error) {
        console.error("Erro na API do top 3:", error);
    }
}

export const saveScoreAPI = async (name, score) => {
    try {
        const resp = await fetch(`${backendUrl}/saveScore`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, score }),
        });

        if (resp.status === 200) {
            return await resp.json();
        } else {
            console.error("Erro ao salvar pontuação");
        }
    } catch (error) {
        console.error("Erro na API de salvar pontuação:", error);
    }
};
