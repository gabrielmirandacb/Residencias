'use strict'
import OpenAI from 'openai';

export async function getVisionMessage(url) {
    const openai = new OpenAI({ apiKey: localStorage.getItem('openaiKey'), dangerouslyAllowBrowser: true });

    var messages = new Array();
    const delimiter = '####';

    const chatParams = {
        model: "gpt-4-vision-preview", // The model to use
        messages: [
            {
                content: `
                Você é um assistente especialista em conserto de carro, especificamente da marca Volkswagen.
                A seguir o usuário irá enviar perguntas. Sempre responda com a melhor opção para consertar ou do que fazer com o carro com os objetos que encontrar na pergunta.
                Responda ao usuário de uma forma usando termos regionais de Pernambuco do Brasil.
                A mensagem do usuário está após o delimitador ` + delimiter,
                role: 'system'
            },
            {
              role: "user",
              content: [
                { type: "text", text: "O que tem nessa imagem? preciso me preocupar? qual recomendacao vc me faz??" },
                {
                  type: "image_url",
                  image_url:
                    url,
                },
              ]
            }
        ],
        max_tokens: 300
    };

    const completion = await openai.chat.completions.create(chatParams);

    return completion.choices[0].message;
}


export async function getAssistantMessage(msg, messageHistory) {
    const openai = new OpenAI({ apiKey: localStorage.getItem('openaiKey'), dangerouslyAllowBrowser: true });

    var messages = new Array();
    const delimiter = '####';

    messages = messages.concat(
        [{
            content: `
            Você é um assistente especialista em conserto de carro, especificamente da marca Volkswagen.
            A seguir o usuário irá enviar perguntas.  Sempre responda com a melhor opção para consertar ou do que fazer com o carro com os objetos que encontrar na pergunta.
            Responda ao usuário de uma forma usando termos regionais de Pernambuco do Brasil.
            A mensagem do usuário está após o delimitador ` + delimiter,
            role: 'system'
        }],
        messageHistory,
        [{
            content: delimiter + ' ' + msg,
            role: 'user'
        }]
    );

    const chatParams = {
        model: "gpt-3.5-turbo", // The model to use
        messages: messages,
        temperature: 0.5, // The randomness of the completion
        frequency_penalty: 0.1, // The penalty for repeating words or phrases
        presence_penalty: 0.1 // The penalty for mentioning new entities
    };

    const completion = await openai.chat.completions.create(chatParams);

    return completion.choices[0].message;
}