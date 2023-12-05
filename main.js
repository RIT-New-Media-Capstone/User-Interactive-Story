const OPENAI_API_KEY = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const initialConversation = [
  {role: 'system', content: 'You are an interested adversary who makes it rain around themself by existing.'},
  {role: 'user', content: 'tell me a 30 word starting point in a dungeon adventure.'},
  {role: 'assistant', content: 'tell me those 50 words as though I am a lucrative dwarf with a battle axe.'}
];

const generateStory = async (messages, temperature) => {
    const requestData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": messages,
            "temperature": temperature,
        }),
    };
    
    try{
        const response = await fetch(apiUrl, requestData);
        const data = await response.json();
        const generatedContent = data.choices[0].message.content;
        console.log(generatedContent);
        document.getElementById("alpha").style.opacity = 1;
        return generatedContent;
    }catch(error){
        console.error("Error", error);
    }
};

document.getElementById("alpha").style.opacity = 0;

document.getElementById("generateStory").addEventListener("click", async () => {
    document.getElementById("alpha").style.opacity = 0;
    const storyOutput = document.getElementById("storyOutput");

    let conversation = initialConversation;
    for(let i = 0; i<1; i++){
        const userMessage = "What happened next?";
        conversation.push({"role": "user", "content": userMessage});

        const generatedContent = await generateStory(conversation, 1.2);
        storyOutput.textContent += generatedContent + "\n\n";
    }
});

document.getElementById("river").addEventListener("click", async() => {
    const storyOutput = document.getElementById("storyOutput");

    const buttonText = document.getElementById("river");
    buttonText.innerHTML = "river";
    const riverText = buttonText.innerHTML = "river";
    buttonText.outerHTML = "<option-button id='field' text='Go to field' onclick='redirect()'></option-button>"
   // const fieldText = buttonText.innerHTML = "field";
   // console.log(buttonText.outerHTML);
  //  const buttonTextTwo = document.getElementById("field");
   // console.log(buttonTextTwo.outerHTML);
    
    let conversation = initialConversation;
    const userMessage = `What happened next after the ${riverText} while including the word ${riverText}`;
    conversation.push({"role": "user", "content": userMessage});
    storyOutput.innerHTML = '';
    const generatedContentTest = await generateStory(conversation, 1.2);
    storyOutput.textContent += generatedContentTest + "\n\n";


    document.getElementById("field").addEventListener("click", async() => {
        const storyOutput = document.getElementById("storyOutput");
    
        // const buttonText = document.getElementById("river");
        // buttonText.innerHTML = "river";
        // const riverText = buttonText.innerHTML = "river";
        // buttonText.outerHTML = "<option-button id='field' text='Go to field' onclick='redirect()'></option-button>"
        const fieldText = buttonText.innerHTML = "field";
       // console.log(buttonText.outerHTML);
        const buttonTextTwo = document.getElementById("field");
      //  console.log(buttonTextTwo.outerHTML);
        
        let conversation = initialConversation;
        const userMessage = `What happened next after the ${riverText} while including the word ${fieldText}`;
        conversation.push({"role": "user", "content": userMessage});
        storyOutput.innerHTML = '';
        const generatedContentTest = await generateStory(conversation, 1.2);
        storyOutput.textContent += generatedContentTest + "\n\n";
    
    });
});


