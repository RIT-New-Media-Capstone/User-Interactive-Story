// //import OpenAI from "./node_modules/openai/index.js";
// import OpenAI from 'openai';

// //const OpenAI = require('openai');

// const openai = new OpenAI({
//     apiKey: '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',
//     //apiKey: process.env.OPENAI_API_KEY,
// });



// //  document.getElementById("generateStory").addEventListener("click", () => {
// // //   //main();
// //   console.log("hello world");
// // })

// // function generateStory(){
// //  // let generateStoryTest = document.querySelector(".generate-story");

// //   main();
// // }


// const initialConversation = [
//   {role: 'system', content: 'You are an interested adversary who makes it rain around themself by existing.'},
//   {role: 'user', content: 'tell me a 30 word starting point in a dungeon adventure.'},
//   {role: 'assistant', content: 'tell me those 50 words as though I am a lucrative dwarf with a battle axe.'}
// ]; 

// async function getOpenAIResponse(conversation){
//   try{
//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: conversation,
//       temperature: 1.4,
//     });

//     return response.choices[0].message.content;
//   }catch(error){
//     console.error('Error Making API Request:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// }

// async function main(){

//   let conversation = initialConversation;

//   for(let i = 0; i < 5; ++i){
//     const response = await getOpenAIResponse(conversation);
//     const userPrompts = [
//      // `Tell me more about ${response.split('.')[0]}`,
//       'Without repeating a previous prompt, write something about the dawrf picking up an item and thinking about the possibility existence.',
//       `Without repeating a previous prompt, write an event about the dwarf to continue the story from ${response.split('.')[0]}.`,
//       `Without repeating a previous prompt, write about the dwarf conversing briefly with an adversary who has a dull sword.`,
//     ];
//     console.log(response + '\n'); //`Response ${i+1}:`, 
//     const randomUserPrompts = userPrompts[Math.floor(Math.random() * userPrompts.length)]
//    // conversation.push({role: 'user', content: `Please continue the story about ${response.split('.')[2]} in 20 words`});
//    conversation.push({role: 'user', content: randomUserPrompts});
//     conversation.push({role: 'assistant', content: response});

//     // if(conversation.length > 10){
//     //   conversation = conversation.slice(-10);
//     // }
//   }
// }


// main();

// //generateStory();
