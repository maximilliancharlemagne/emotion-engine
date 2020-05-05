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
    success: (data) => {
      console.log(data.emotion);
      textDisplayer(data.emotion)
      //process the JSON data etc
    }
  })
}

function textDisplayer(anEmotionObject){
  $('#resultsSwirl').addClass('hide')
  $('#resultsDiv').removeClass('hide')
  $('#happyBar').attr('style',`width: ${Math.floor(anEmotionObject.happy*100)}%`)
  $('#angryBar').attr('style', `width: ${Math.floor(anEmotionObject.angry * 100)}%`)
  $('#excitedBar').attr('style', `width: ${Math.floor(anEmotionObject.excited * 100)}%`)
  $('#sadBar').attr('style', `width: ${Math.floor(anEmotionObject.sad*100)}%`)
  $('#fearBar').attr('style', `width: ${Math.floor(anEmotionObject.fear*100)}%`)
  $('#boredBar').attr('style', `width: ${Math.floor(anEmotionObject.indifferent*100)}%`)
}