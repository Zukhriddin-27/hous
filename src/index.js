import React from 'react'
import ReactDOM from 'react-dom/client'
import RootContext from './context'
import 'antd/dist/antd.css'
import './index.css'
import Root from './root'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootContext>
        <Root />
      </RootContext>
    </BrowserRouter>
  </React.StrictMode>
)
