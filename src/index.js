import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons'; 
import * as serviceWorker from './serviceWorker';
import Card from './Components/KeywordsFollowing';
// import { whyDidYouUpdate } from 'why-did-you-update';

// if (process.env.NODE_ENV !== "production") {
//   whyDidYouUpdate(React);
// }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
