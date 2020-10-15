import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Box from './Box';
import Style from './Style';

ReactDOM.render(
  <React.StrictMode>
      <Style></Style>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
