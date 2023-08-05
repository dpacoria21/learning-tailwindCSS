import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Spacing } from './components/spacing/Spacing'
import { TextApp } from './components/texts/TextApp'
import { Typography } from './components/texts/Typography'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Typography />
    </>
  </React.StrictMode>,
)
