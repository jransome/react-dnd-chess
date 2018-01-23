// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// // import Square from './components/square'
// // import Knight from './components/knight'
// import Board from './components/board'

// ReactDOM.render(
//     // <Square black={true}>
//     //     <Knight />
//     // </Square>
//     <Board knightPosition={[7, 4]} />,
//     document.getElementById('root')

// );
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { observe } from './game'
import Board from './components/board'
import './index.css';

const rootEL = document.getElementById('root');

observe(
    knightPosition => 
    ReactDOM.render(
        <Board knightPosition={knightPosition} />,
        rootEL
    )
);

