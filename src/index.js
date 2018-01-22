import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Knight from './components/knight'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Knight />, document.getElementById('root'));
registerServiceWorker();
