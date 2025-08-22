const OpenAI = require("openai");
const fetch = require("node-fetch");
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    fetch
});

async function makeQuery() {
    const response = await client.responses.create({
        model: "gpt-5-nano",
        prompt: {
            id: "pmpt_689dc660f7e4819691f90e4f64ae90530e1c4f736053d887",
            version: "37",
            variables: {
                theme: "Sailing",
                goal: "Skipper exam",
                questions_amount: "1",
                language: "Spanish",
                options_amount: "4",
                correct_answers_amount: "1",
                test_type: "Official PER exam",
                domain: "Nomenclatura náutica",
                subdomain: "Casco",
                topics: `
                    cubierta, proa, popa, babor, estribor,\n
                    línea de crujía, amura, aleta, través,\n
                    línea de flotación, obra viva y obra muerta,\n
                    bañera, imbornales, escotilla, lumbrera, manguerotes,\n 
                    portillo, tragaluces, pasamanos, candeleros, guardamancebos.
                `
            }
        },
        max_output_tokens: 50000,
    });
    
    console.log(response)
    return JSON.parse(response.output_text);
}

module.exports = makeQuery;