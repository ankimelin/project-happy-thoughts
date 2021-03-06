import React, { useState } from 'react'

import { MessageInput } from './components/MessageInput.js'
import { MessageList } from './components/MessageList.js'

export const App = () => {

  const MESSAGE_URL = 'https://happy-thoughts-annika.herokuapp.com/thoughts'

  const [messages, setMessages] = useState([])

  const getMessages = () => {

    fetch(MESSAGE_URL)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setMessages(data) //storing the messages from the api in the state variable messages 
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <MessageInput getMessages={getMessages} />
      <MessageList getMessages={getMessages} messages={messages} />
    </>
  )
}
