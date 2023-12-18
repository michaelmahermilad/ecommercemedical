import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./Redux/store";
import { Provider } from "react-redux";



TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode>
  <Provider store={store}>
    
       <App />
   
  </Provider>  </React.StrictMode>
);

 
