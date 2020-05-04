// Speech to text code goes here

//Create global variables
let resultString = '' //need to convert this to stringToAnalyze once we finish

//enables ability for mobile and desktop // feeds objects to Chrome
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

//makes local copy for us to use
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

//add our grammar to the recognition - will this work with an empty list?
recognition.grammars = speechRecognitionList;

//Controls whether continuous results are captured
recognition.continuous = true;
//in english
recognition.lang = 'en-US';
//Defines whether the speech recognition system should return interim results, or just final results. Does it have to be true for continuous results?
recognition.interimResults = false;
//Sets the number of alternative potential matches that should be returned per result
recognition.maxAlternatives = 1;
//start button function
document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}
//fired once a successful result is received
recognition.onresult = function(event) {
    var color = event.results[0][0].transcript;
    diagnostic.textContent = 'Result received: ' + color + '.';
    bg.style.backgroundColor = color;
    console.log('Confidence: ' + event.results[0][0].confidence);
  }
//check out documentation on why burnt wheat was not flagged
  recognition.onnomatch = function(event) {
    diagnostic.textContent = 'I didnt recognise that color.';
  }
//handles cases where there is an actual error with the recognition successfully
  recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  }
  //stop the speech recognition service from running
  //for submit and reset buttons
  SpeechRecognition.stop()

//start button
//make an event listener that listens for startBtn

//start the speech recognition

//stop button
//make an event listener that listens for stopBtn

//stop the speech recognition

//When we get a result

