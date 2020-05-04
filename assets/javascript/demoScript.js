//API Test 1
//Analyzing some text with TextRazor

//API key: (redacted after test)
//pls no steal

//textrazor url: https://api.textrazor.com

//important reference info: https://stackoverflow.com/questions/25515936/perform-curl-request-in-javascript

/*
$.ajax({
        url: 'https://api.wit.ai/message?v=20140826&q=',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
        }, success: function(data){
            alert(data);
            //process the JSON data etc
        }
})
*/ //reference code do not uncommment

// testing code - add your API key to use

// $.ajax({
//   type: "POST",
//   url: 'https://api.textrazor.com',
//   data: {
//     text: 'The rain in Spain falls mainly on the plain.'
//   },
//   beforeSend: function (xhr) {
//     xhr.setRequestHeader("x-textrazor-key", "your-API-key")
//   }, success: function (data) {
//     alert(data);
//     //process the JSON data etc
//   }
// })

//TEST STATUS: FAIL
//returns a CORS error (-_-｡)

//API Test 2:
//Sentiment analyzing some text with ParallelDots

//API key: redacted

//uncomment test code with your api key

// let dataObject = {
//   api_key: 'your-api-key',
//   lang_code: 'en',
//   text: `I REALLY HATE MEGADETH'S NEW ALBUM!`
// }

// $.ajax({
//   type: "POST",
//   url: 'https://apis.paralleldots.com/v4/sentiment',
//   data: dataObject, 
//   success: function (data) {
//     console.log(data);
//     //process the JSON data etc
//   }
// })

//TEST STATUS: PASS
//Returns a sentiment object!

//Test 3: Google Speech-to-Text API

//url: https://speech.googleapis.com/v1p1beta1.speech

//TEST STATUS: FAIL
//Confuses Max too much

//Test 4: Mozilla Speech-to-Text API

//Copying the Mozilla code straight up
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var colorHTML = '';
colors.forEach(function (v, i, a) {
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});

hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try ' + colorHTML + '.';

document.body.onclick = function () {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function (event) {
  var color = event.results[0][0].transcript;
  console.log(event)
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
  console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function () {
  recognition.stop();
}

recognition.onnomatch = function (event) {
  diagnostic.textContent = 'I didnt recognise that color.';
}

recognition.onerror = function (event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}

//TEST STATUS: PASS
//The code works...
///but can we understand *how* it works, and successfully integrate it?