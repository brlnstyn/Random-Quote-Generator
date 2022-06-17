const quoteText = document.querySelector(".quote"),
      authorName = document.querySelector(".author .name"),
      soundBtn = document.querySelector(".sound"),
      copyBtn = document.querySelector(".copy"),
      quoteBtn = document.querySelector("button");

// random quote function
function randomQuote(){
    quoteBtn.innerText = "Loading Quote...";
    // fetching random quotes from the API and parsing it into Javascript obejct
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";

    });
}

soundBtn.addEventListener("click", ()=>{
    // the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); //speak method
});

copyBtn.addEventListener("click", ()=>{
    // copying the quote text on copyBtn click
    // writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});


quoteBtn.addEventListener("click", randomQuote);