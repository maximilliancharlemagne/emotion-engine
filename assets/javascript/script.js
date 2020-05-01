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

//API key: 2UKOrCNzK8621TicKvum4P5XOmEqPm4hVdJ4NZIt4r8

let dataObject = {
  api_key: '2UKOrCNzK8621TicKvum4P5XOmEqPm4hVdJ4NZIt4r8',
  lang_code: 'en',
  text: `I REALLY HATE MEGADETH'S NEW ALBUM!`
}

$.ajax({
  type: "POST",
  url: 'https://apis.paralleldots.com/v4/sentiment',
  data: dataObject, 
  success: function (data) {
    console.log(data);
    //process the JSON data etc
  }
})

//TEST STATUS: PASS
//Returns a sentiment object!