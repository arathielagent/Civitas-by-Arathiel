const OpenAI = require('openai');
const Civitas = require('../civitas.min');

const client = new OpenAI({
    apiKey: process.env['ARATHIEL_API_KEY'], // This is the default and can be omitted
    baseURL: "https://api.arathiel.com/v1/verified",
});

async function main() {
    const chatCompletion = await client.chat.completions.create({
        messages: [{role: 'user', content: 'Say this is a test'}],
        model: 'gpt-4o',
    });

    const result = Civitas.verifySignature(chatCompletion)
    console.log("Signature is valid: " + result)
}

main();
