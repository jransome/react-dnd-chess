import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Square from './components/square'
import Knight from './components/knight'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Square black={true}>
        <Knight />
    </Square>, 
    document.getElementById('root')
);
registerServiceWorker();
