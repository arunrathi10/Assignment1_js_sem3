// Creating arrays
let wordIndex = [0,0,0,0,0]; //the current index of each word
let selectedWords = ["","","","",""]; // currently selected word from the list

function speakWord(index){ //created a function, parameter is index
    const words = document.querySelectorAll(`#list${index} .item`);  //getting all the words from the list
    const word = words[wordIndex[index]].innerText; // getting the selected word 
    
    const u = new SpeechSynthesisUtterance(word); // using speechsynthesisutterance {from: w3 school} for word
    speechSynthesis.speak(u); // speaking the word

    selectedWords[index] = word; //saving the selected word by user
    document.querySelectorAll('.selected')[index].innerText = word; //updating the word

    //using if-else for the word index
    if (wordIndex[index] < words.length -1){
        wordIndex[index]++;
    }   else {
        wordIndex[index] = 0;
    }
}

function createUserStory(){ // creating a function for creating user storry
    const story = selectedWords.join(" "); //joining the words to make a sentence
    document.getElementById("story").innerText = story; //showing the story in <p> tag

    //reading aloud the story
    const u = new SpeechSynthesisUtterance(story);
      speechSynthesis.speak(u);
}

function resetUserStory(){ // creating the function to reset the story made by user
    document.getElementById("story").innerText = ""; //empty the content

    const selectedElemnt = document.querySelectorAll('.selected'); //getting all the slected items from the list

    //using for loop to clear the selected words
    for (let i=0; i<5; i++){
        selectedWords[i] = "";
        selectedElemnt[i].innerText = "...";
        wordIndex[i] = 0;
    }
}

function generateRandomStory(){ //creating a random story generator
    let story = "";

    //using for loop to loop through the list of words
    for(let i = 0; i < 5; i++){
        const words = document.querySelectorAll(`#list${i} .item`);
        const randomIndex = Math.floor(Math.random() * words.length); //selecting a random word frm each list of words
        story += words[randomIndex].innerText + " "; //adding the random words to story
    }
    document.getElementById("story").innerText = story;

    // reading aloud the story
    const u = new SpeechSynthesisUtterance(story);
    speechSynthesis.speak(u);

}