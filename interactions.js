const { createMessageAdapter } = require('@slack/interactive-messages')
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const slackInteractions = createMessageAdapter(slackSigningSecret)
const articleOrBookButton = require('./elements/articleOrBookButton.json')
const respondToButtons = require('./respondToButtons')


module.exports.listenForInteractions = function (app) {
  app.use('/interactions', slackInteractions.requestListener())
}

slackInteractions.action({ type: 'select' }, (payload, respond) => {
  respondToSelectDropdown(payload, respond)
})

slackInteractions.action({ type: 'button' }, (payload, respond) => {
  respondToButtons.respond(payload, respond)
})

function respondToSelectDropdown(payload, respond) {
  const selectedOption = payload.actions[0].selected_options[0].value

  if (payload.callback_id == 'subjects') {
    switch (selectedOption) {
      case 'eai':
        text = 'You selected EAI.'
        callbackId = 'eai_response'
        respondWithArticleOrBookNoButton(text, callbackId, respond)
        break
      case 'mainframe':
        text = 'You selected Mainframe.'
        callbackId = 'mainframe_response'
        respondWithArticleOrBookNoButton(text, callbackId, respond)
        break
      case 'dbms':
        text = 'You selected DBMS'
        callbackId = 'dbms_response'
        respondWithArticleOrBookNoButton(text, callbackId, respond)
        break
     case 'os':
        text = 'You selected Open Systems'
        callbackId = 'os_response'
        respondWithArticleOrBookNoButton(text, callbackId, respond)
        break
     case 'pmt':
        text = 'You selected Project Management & Transition Management'
        callbackId = 'pmt_response'
        respondWithArticleOrBookNoButton(text, callbackId, respond)
        break
    }
  }
  // Return a replacement message
  return { text: 'Processing...' }
}

function respondWithArticleOrBookNoButton(text, callbackId, respond) {
  articleOrBookButton.callback_id = callbackId
  articleOrBookButton.text = 'Do you need resources or SME support?'
  respond({
    text: text,
    attachments: [articleOrBookButton],
    replace_original: false
  })
}