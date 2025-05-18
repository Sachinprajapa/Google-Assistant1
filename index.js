let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    //speakInput.rate = 1;
   // speakInput.pitch = 1;
   // speakInput.volume = 1;
   //speakInput.lang = "en-GB"
    window.speechSynthesis.speak(speakInput);

}
window.onload = () => {
   // speakFunc("hello ");
   greetingFunc();
}

const greetingFunc = () =>{
    let date = new Date();
    let hour = date.getHours();
    if(hour>=0 && hour < 12){
        speakFunc("Good morning sachin , How can help you today")
    }
    else if(hour >=12 && hour < 16){
        speakFunc("Good afternoon sachin , How can help you today")
    }
    else{
        speakFunc("Good night sachin , How can help you today")
    }
}

const startVoiceInput = () =>{
    if('webkitSpeechRecognition'in window)
    {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (e) =>{
        let spokenText=e.results[0][0].transcript;
        handleCommands(spokenText.toLowerCase());
         box.classList.remove("btn-box");
         btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`
    }
    recognition.start();
    }else
    {
        alert("Your Browser dose not support voice input !")
    }
}
btn.onclick = () =>{
    box.classList.add("btn-box");
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`
    startVoiceInput();
}

const handleCommands = (command) =>{
    if(command.includes("hello") || command.includes("hey") || command.includes("hi"))
    {
        speakFunc("Hello sir, How can I Help You Today !");
    }
    else if(command.includes("who are You") || command.includes("tumko kisne banaya") || command.includes("hu r u"))
        {
            speakFunc(" I Am Virtual Asistance, Developed By Sachin Prajapati !");
        }
   
    else if(command.includes("open youtube") || command.includes("Just for code") || command.includes("Youtube"))
            {
                speakFunc("Opening...  Youtube Channel");
                window.open("https://www.youtube.com/");
            }
   else if(command.includes("Open google") || command.includes("Just for code") || command.includes("Channel"))
                {
                    speakFunc("Opening...  google ");
                    window.open("https://www.google.com/");
                }  
   else if(command.includes("Tell me time") || command.includes("time kya ho raha hai") || command.includes("kitna baj raha hai"))
                    {
                        speakFunc("time");
                        let time = new time().toLocaleDateString(undefined,{hour:'numeric',minute:'numeric'})
                       
                    }  
                    
   else if(command.includes("tell me date") || command.includes("aaj ka date") || command.includes("date"))
                        {
                            speakFunc("date ");
                            let date = new date().toLocaleDateString(undefined,{day:'numeric',month:'long'})
                            
                        }  
   else{
                    speakFunc(`This is, What i found on internet regarding ${command}`);
                    window.open(`https://www.google.com/search?q=${command}`)
                }      
}