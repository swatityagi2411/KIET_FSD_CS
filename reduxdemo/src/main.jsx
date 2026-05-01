import { StrictMode } from 'react'
import {Provider} from 'react-redux';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import store from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    </StrictMode>
 
)
