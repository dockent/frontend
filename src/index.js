import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import configureStore from "./store/configureStore";
import App from "./components/App";
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <Router>
        <Route path='/' component={App}/>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
