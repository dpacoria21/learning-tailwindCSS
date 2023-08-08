import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { BordersApp } from './components/borders/BordersApp'
// import { Spacing } from './components/spacing/Spacing'
// import { TextApp } from './components/texts/TextApp'
// import { Typography } from './components/texts/Typography'
// import { ZisingApp } from './components/zisings/ZisingApp'
import { FlexboxGridApp } from './components/flexbox-grid/FlexboxGridApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <>
        <FlexboxGridApp /> 
      </>
    </React.StrictMode>
  </BrowserRouter>
)
