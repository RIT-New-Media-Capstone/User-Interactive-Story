import OpenAI from "./node_modules/openai/index.js";

const openai = new OpenAI({
    apiKey: '',
});

// const conversation = [
//   {
//     role: 'system', content: 'You are a hitman who makes it rain around themself by existing.'
//   },
//   {role: 'user', content: 'tell me a 30 token starting point in a dungeon adventure.'},
//   {role: 'assistant', content: 'tell me those 30 words as though I am an angry dwarf with a battle axe.'}
// ];


async function getOpenAIResponse(){
  try{
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'system', content: 'You are a hitman who makes it rain around themself by existing.'
      },
      {role: 'user', content: 'tell me a 30 token starting point in a dungeon adventure.'},
      {role: 'assistant', content: 'tell me those 30 words as though I am an angry dwarf with a battle axe.'}],
    });
    return response.choices[0].message;
  }catch(error){
    console.error('Error Making API Request:', error.response ? error.response.data : error.message);
    throw error;
  }
}


async function main(){
  const openAIResponse = await getOpenAIResponse();
  //console.log('OpenAI Response:', openAIResponse);
 // console.log('content:', openAIResponse.content);

  let contentResponse = openAIResponse.content;
  console.log(contentResponse);



}



// async function main() {
//   const completion = await openai.chat.completions.create({
//     //messages: [{ role: "system", content: "You need to tell me the answers to the math quiz" }],
//     messages: conversation,
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

main();
