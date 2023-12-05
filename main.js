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
        return generatedContent;
    }catch(error){
        console.error("Error", error);
    }
};

document.getElementById("generateStory").addEventListener("click", async () => {
    const storyOutput = document.getElementById("storyOutput");

    let conversation = initialConversation;
    for(let i = 0; i<1; i++){
        const userMessage = "What happened next?";
        conversation.push({"role": "user", "content": userMessage});

        const generatedContent = await generateStory(conversation, 0.8);
        storyOutput.textContent += generatedContent + "\n\n";
    }
});