//Text analysis and display code goes here
//might want to break up analysis and display?

function textAnalyzer(stringToAnalyze){
  console.log(`text analyzer called with arg: ${stringToAnalyze}`)

  let dataObject = {
  api_key: '2UKOrCNzK8621TicKvum4P5XOmEqPm4hVdJ4NZIt4r8',
  lang_code: 'en',
  text: stringToAnalyze
  }

  console.log(dataObject)

  $.ajax({
    type: "POST",
    url: 'https://apis.paralleldots.com/v5/emotion',
    data: dataObject, 
    success: function (data) {
      console.log(data);
      textDisplayer(data)
      //process the JSON data etc
    }
  })
}

function textDisplayer(anEmotionObject){
  
}