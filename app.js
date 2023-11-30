import OpenAI from "./node_modules/openai/index.js";

const openai = new OpenAI({
    apiKey: '',
});



const initialConversation = [
  {
    role: 'system', content: 'You are an interested adversary who makes it rain around themself by existing.'
  },
  {role: 'user', content: 'tell me a 30 word starting point in a dungeon adventure.'},
  {role: 'assistant', content: 'tell me those 50 words as though I am a lucrative dwarf with a battle axe.'}
]; 

async function getOpenAIResponse(conversation){
  try{
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversation,
      temperature: 1.4,
    });

    return response.choices[0].message.content;
  }catch(error){
    console.error('Error Making API Request:', error.response ? error.response.data : error.message);
    throw error;
  }
}

async function main(){

  let conversation = initialConversation;

  for(let i = 0; i < 9; ++i){
    const response = await getOpenAIResponse(conversation);
    const userPrompts = [
     // `Tell me more about ${response.split('.')[0]}`,
      'Let the dawrf pick up an item and think about the possibility of such item.',
      `Add an event that the dwarf did to continue from ${response.split('.')[0]}.`,
      `Let the dwarf converse briefly with a hitman who has a dull sword.`,
    ];
    console.log(response + '\n'); //`Response ${i+1}:`, 
    const randomUserPrompts = userPrompts[Math.floor(Math.random() * userPrompts.length)]
   // conversation.push({role: 'user', content: `Please continue the story about ${response.split('.')[2]} in 20 words`});
   conversation.push({role: 'user', content: randomUserPrompts});
    conversation.push({role: 'assistant', content: response});

    // if(conversation.length > 10){
    //   conversation = conversation.slice(-10);
    // }
  }
}


// async function getOpenAIResponse(){
//   try{
//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [{
//         role: 'system', content: 'You are a hitman who makes it rain around themself by existing.'
//       },
//       {role: 'user', content: 'tell me a 30 token starting point in a dungeon adventure.'},
//       {role: 'assistant', content: 'tell me those 30 words as though I am an angry dwarf with a battle axe.'}],
//     });
//     return response.choices[0].message;
//   }catch(error){
//     console.error('Error Making API Request:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// }


// async function main(){
//   const openAIResponse = await getOpenAIResponse();
//   //console.log('OpenAI Response:', openAIResponse);
//  // console.log('content:', openAIResponse.content);

//   let contentResponse = openAIResponse.content;
//   console.log(contentResponse);

// }


main();
