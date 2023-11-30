import OpenAI from "./node_modules/openai/index.js";


const openai = new OpenAI({
    apiKey: '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',
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You need to tell me the answers to the math quiz" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();

