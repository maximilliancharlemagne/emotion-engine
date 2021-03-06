// Speech to text code goes here

//Create global variables
let resultString = '' //will be passed to textAnalyze function in the textEngine file
let newResult
let i = 0

//enables ability for mobile and desktop // feeds objects to Chrome
let SpeechRecognition = webkitSpeechRecognition
let SpeechGrammarList = webkitSpeechGrammarList
let SpeechRecognitionEvent = webkitSpeechRecognitionEvent

//makes local copy for us to use
let recognition = new SpeechRecognition();
let speechRecognitionList = new SpeechGrammarList();

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

//start button
//make an event listener that listens for startBtn
$('#startBtn').click( ()=>{
  //start the speech recognition
  recognition.start();
  $('#progressBar').removeClass('hide')
  console.log('Starting recognition')
  resultString = ''
}
)


//stop button
//make an event listener that listens for stopBtn
$('#pauseBtn').click( () => {
  //stop the speech recognition
  recognition.stop()
  $('#progressBar').addClass('hide')
}
)

//reset button
//make an event listener that listens for resetBtn
$('#resetBtn').click(() => {
  //stop the speech recognition
  recognition.stop()
  //clear resultString
  resultString = ''
  $('#submitBtn').addClass('disabled')
  $('#progressBar').addClass('hide')
  $('#detailedResults').addClass('hide')
  i = 0
}
)


//submit button
//make an event listener that listens for resetBtn
$('#submitBtn').click(() => {
  if(resultString){ //if resultString is not empty
    //stop the speech recognition
    recognition.stop()
    //call textAnalyzer from textEngine on resultString
    textAnalyzer(resultString)
    resultString = ''
    i = 0
    $('#submitBtn').addClass('disabled')
    $('#progressBar').addClass('hide')
    $('#resultsSwirl').removeClass('hide')
    $('#resultsDiv').addClass('hide')
  }
  }
  
)

//fired once a successful result is received
recognition.onresult = function (event) {
  $('#submitBtn').removeClass('disabled')
  console.log(event)
  newResult = event.results[i][0].transcript;
  i++
  console.log(`New result: ${newResult}`)
  resultString = resultString+newResult
  console.log('Confidence: ' + event.results[0][0].confidence);
  console.log('New overall results: ' + resultString)
}

//check out documentation on why burnt wheat was not flagged
recognition.onnomatch = function (event) {
  console.log('I didnt recognise that word.')
}
//handles cases where there is an actual error with the recognition successfully
recognition.onerror = function (event) {
  console.log('Error occurred in recognition: ' + event.error)
}
