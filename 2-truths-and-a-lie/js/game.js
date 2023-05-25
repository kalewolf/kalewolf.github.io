// this file is for code needed for input, quiz, and truth game

// global variable for first name

let fname = "";

// function to get info from intro form
// chack input and produce and produce a sentence

function greet() {
    let greetParagraph = document.getElementById("greet");

    // get the values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    // check the input
    if (fname==="" || lname==="") {
        alert("First and last name cannot be an empty string!");
        return;
    }
    // age check
    if (age==="" || age < 18) {
        alert("Invalid");
        return;
    }

    // update output paragraph
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + "!";
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia-answer");
    let chocSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocSelected) {
        triviaAnswer.innerHTML = fname + " chocolate is wrong!";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + " tuna is wrong!";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + " you are correct!";
    }
    else {
        triviaAnswer.innerHTML = "Uh Oh. Something went wrong!!!";
    }
}

function TTaaL1() {
    let TTaaL1Answer = document.getElementById("TTaaL1-answer").checked;
    let orcaSelected = document.getElementById("orcas").checked;
    let humanitiesSelected = document.getElementById("humanities").checked;
    let shoulderSelected = document.getElementById("shoulder").checked;

    if (orcaSelected) {
        TTaaL1Answer.innerHTML = "I love orcas, that was not the lie."
    }
    else if (humanitiesSelected) {
        TTaaL1Answer.innerHTML = "I greatly dislike the humanities, That was the lie!"
    }
    else if (shoulderSelected) {
        TTaaL1Answer.innerHTML = "I can dislocate my shoulder on command, that was not the lie."
    }
    else {
        TTaaL1Answer.innerHTML = "Uh Oh. Something went wrong!!!"
    }
}

