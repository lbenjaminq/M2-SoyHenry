import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  ,
  
  document.getElementById('root')
);
=======
import './index.css';
<<<<<<< HEAD
import Timer from './Timer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Timer />, document.getElementById('root')
=======
import App from './App';
<<<<<<< HEAD
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
>>>>>>> 931330a327da323d52c46a2a03bec69278893e4d
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
ReactDOM.render(
    <App />,
=======

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
>>>>>>> 94f920d9566b9305db5d6e223fb0368dc771098a
  document.getElementById('root')
);
>>>>>>> 7c9fae24c5f06a459a976773e8883b728cb68b6e
>>>>>>> 931330a327da323d52c46a2a03bec69278893e4d
>>>>>>> ccc3b8ff27a3978819945e6fe01f86441d008595
