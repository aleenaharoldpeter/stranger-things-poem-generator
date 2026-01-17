function displayPoem(response) {
    console.log("poem generated")
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    }); 
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions")
    let prompt = `Generate an English poem about ${instructionsInput.value}`;
    let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML without explicitly mentioning that it is HTML at the top of the poem. Ensure to follow the user instructions below. SIgn the poem with SheCodes AI in bold and with a hyphen before it";
    let apiKey = "5037o6a07f1bdbdcf547b34731aft69a";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    console.log("Generating poem...");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    axios.get(apiUrl).then(displayPoem);
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);