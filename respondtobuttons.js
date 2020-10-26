function respond(payload, respond) {
   switch (payload.callback_id) {
    case 'eai_response':
      respondToEAIButton(payload.actions[0].value, respond)
      break
    case 'dbms_response':
      respondToDBMSButton(payload.actions[0].value, respond)
      break
    case 'os_response':
      respondToOSButton(payload.actions[0].value, respond)
      break
    case 'mainframe_response':
      respondToMFButton(payload.actions[0].value, respond)
      break
    case 'java_response':
      respondToJAVAButton(payload.actions[0].value, respond)
      break
    case 'pmt_response':
      respondToPMTButton(payload.actions[0].value, respond)
      break	
  }
  // Return a replacement message
  return { text: 'Processing...' }
}

function respondToEAIButton(selectedOption, respond) {

  if (selectedOption == 'sme') {
    respond({      
      blocks: 
      [
  	{
    	  "type": "section",
    	  "text": {
        	"type": "mrkdwn",
        	"text": "You will get SME names on <https://w3.ibm.com/services/lighthouse/spaces/view/custom-ams/enterprise-application-integration/Site>:about Integration Service Line :handshake: :+1:"
    			}
  	}
	],
      replace_original: false
    })
  }
  else {
    respond({
      blocks: [
  	{
    	  "type": "section",
    	  "text": {
        	"type": "mrkdwn",
        	"text": "Please contact Pankaj Pudke for more information :handshake: :+1:"
    			}
  	}
	],
      replace_original: true
    })
  }
}


function respondToDBMSButton(selectedOption, respond) {

  if (selectedOption == 'sme') {
    respond({      
      blocks: 
      [
  	{
    	  "type": "section",
    	  "text": {
        	"type": "mrkdwn",
        	"text": "Please contact Shrikant Kulkarni for more information :handshake: :+1:"
    			}
  	}
	],
      replace_original: false
    })
  }
  else {
    respond({
      blocks: [
  	{
    	  "type": "section",
    	  "text": {
        	"type": "mrkdwn",
        	"text": "Please contact Pankaj Pudke for more information :handshake: :+1:"
    			}
  	}
	],
      replace_original: true
    })
  }
}

function respondToAutismAllyshipButton(selectedOption, respond) {
  const autismAllyshipArticle = require('./resources/autismAllyshipArticle.json')
  const autismAllyshipBook = require('./resources/autismAllyshipBook.json')

  if (selectedOption == 'article') {
    respond({
      blocks: autismAllyshipArticle,
      replace_original: true
    })
  }
  else {
    respond({
      blocks: autismAllyshipBook,
      replace_original: true
    })
  }
}

module.exports.respond = respond