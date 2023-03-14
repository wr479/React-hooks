import React from 'react'
import Main from './Main'
import Alert from './alert/Alert'
import {AlertProvider} from './alert/alertContext.js'

function App() {
  return (
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  )
}

export default App