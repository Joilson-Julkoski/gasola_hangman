import type { HttpContext } from '@adonisjs/core/http';

export default class WordsController {
    async generateNewWord({ response }: HttpContext) {
        const wordResponse = await fetch('https://api.dicionario-aberto.net/random');

        if (wordResponse.status !== 200) {
            console.error(wordResponse.status);
            console.error(await wordResponse.text());
            return response.status(wordResponse.status).send({ error: 'An error occurred' });
        }

        const wordData = (await wordResponse.json()) as Record<string, any>;
        const word = wordData['word'];

        try {
            // Chamando a API do Google Generative Language
            const aiResponse = await fetch(
                'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDguLGmxW9qe7r9ul781kU7SkgygznNixA',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    { text: `Dê uma dica curta e simples para a palavra: ${word}` },
                                ],
                            },
                        ],
                    }),
                }
            );

            if (aiResponse.status !== 200) {
                console.error(aiResponse.status);
                console.error(await aiResponse.text());
                return response.status(aiResponse.status).send({ error: 'Failed to fetch AI-generated hint' });
            }

            const aiData: any = await aiResponse.json();
            const hint = aiData.candidates[0].content.parts[0].text || 'Sem dica disponível.';

            return { word, hint };
        } catch (error) {
            console.error(error);
            return response.status(500).send({ error: 'An internal error occurred' });
        }
    }
}
