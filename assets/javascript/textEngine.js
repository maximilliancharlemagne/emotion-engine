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

  //code for detailed results
  //split the stringToAnalyze into its component words
  wordsArray = stringToAnalyze.split(' ') //splits a string into an array by each occurence of a given character
  ourLength = 8
  fraction = Math.floor(wordsArray.length / ourLength)
  whole_number = fraction * ourLength
  remainder = wordsArray.length % ourLength
  let myNewArr
  $('#detailedResults').html(`<h4>Your Detailed Results</h4> `)
  console.log(wordsArray.length)
  console.log(ourLength)
  if(wordsArray.length > ourLength){
    for (let i = 0; i < whole_number; i = i + ourLength) {
      let thisSection = wordsArray.slice(i, i + ourLength)
      console.log(thisSection)
      // let myEmotionArray = []
      let myDataObject = {
        api_key: '2UKOrCNzK8621TicKvum4P5XOmEqPm4hVdJ4NZIt4r8',
        lang_code: 'en',
        text: thisSection.join(' ')
      }
      $.ajax({
        type: "POST",
        url: 'https://apis.paralleldots.com/v5/emotion',
        data: myDataObject,
        async: false,
        success: (data) => {
          console.log(`data to push ${[thisSection.join(' '), JSON.stringify(data.emotion)]}`)
          let biggestEmotion
          let biggestValue = 0
          for (let [key, value] of Object.entries(data.emotion)) {
            console.log(`${key}: ${value}`);
            if (value > biggestValue) {
              biggestValue = value
              biggestEmotion = key
              console.log(`new biggest ${biggestEmotion}: ${biggestValue}`);
            }

          }
          let newElem = $('<p>')
          newElem.text(thisSection.join(' '))
          if (biggestEmotion == 'happy') {
            newElem.css('background-color', '#ef6c00') //the bg color
            newElem.css('color', 'white') //the text color
          }
          else if (biggestEmotion == 'angry') {
            newElem.css('background-color', '#c62828') //the bg color
            newElem.css('color', 'white') //the text color
          }
          else if (biggestEmotion == 'excited') {
            newElem.css('background-color', '#fbc02d') //the bg color
            // newElem.css('color', 'white') //the text color
          }
          else if (biggestEmotion == 'sad') {
            newElem.css('background-color', '#2962ff') //the bg color
            newElem.css('color', 'white') //the text color
          }
          else if (biggestEmotion == 'fear') {
            newElem.css('background-color', '#4627a0') //the bg color
            newElem.css('color', 'white') //the text color
          }
          else if (biggestEmotion == 'indifferent') {
            newElem.css('background-color', '#1b5e20') //the bg color
            newElem.css('color', 'white') //the text color
          }
          $('#detailedResults').removeClass('hide')
          $('#detailedResults').append(newElem)
        }
      })
    }
  }
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