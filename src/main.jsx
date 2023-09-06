import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { BordersApp } from './components/borders/BordersApp'
// import { Spacing } from './components/spacing/Spacing'
// import { TextApp } from './components/texts/TextApp'
// import { Typography } from './components/texts/Typography'
// import { ZisingApp } from './components/zisings/ZisingApp'
// import { FlexboxGridApp } from './components/flexbox-grid/FlexboxGridApp'
// import { CardComponent } from './components/project-01/CardComponent'
// import { DarkMode } from './components/project-02/DarkMode'
import { Navbar } from './components/project-03/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <>
        <Navbar /> 
      </>
    </React.StrictMode>
  </BrowserRouter>
)
