// Speech to text code goes here

//enables ability for mobile and desktop // feeds objects to Chrome
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
//makes local copy for us to use
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
//replace with 10,000 word array
var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ... ];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
//accepts as parameters the string we want to add, 
//plus optionally a weight value that specifies the importance of this grammar
speechRecognitionList.addFromString(grammar, 1);
//speech recognition instance by setting it to the value
recognition.grammars = speechRecognitionList;
//Controls whether continuous results are captured

//can we pass results continuously? Must test
recognition.continuous = false;
//in english
recognition.lang = 'en-US';
//Defines whether the speech recognition system should return interim results, or just final results.
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