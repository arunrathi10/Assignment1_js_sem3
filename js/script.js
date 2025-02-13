// Creating arrays
let wordIndex = [0,0,0,0,0] //the current index of each word
let selectedWords = ["","","","",""] // currently selected word from the list

function speakWord(index){ //created a function, parameter is index
    const words = document.querySelectorAll(`#list-${index} .item`)  //getting all the words from the list
    const word = words[wordIndex[index]].innerText; // getting the selected word 
    
    const u = new SpeechSynthesisUtterance(word); // using speechsynthesisutterance {from: w3 school} for word
    speechSynthesis.speak(u); // speaking the word

    selectedWords[index] = word; //saving the selected word by user
    document.querySelectorAll('.selected')[index].innertext = word; //updating the word

    //using if-else for the word index
    if (wordIndex[index] < words.length -1){
        wordIndex[index]++;
    }   else {
        wordIndex[index] = 0;
    }
}