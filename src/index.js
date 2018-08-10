import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import App from "./components/App";
import 'semantic-ui-css/semantic.min.css';
import {Application} from "./providers/UrlProvider";
import Storage from './Storage';
import {BrowserRouter as Router} from "react-router-dom";

fetch(Application.applicationConfig)
    .then((response) => {
        response.json()
            .then((data) => {
                Storage.set('debugMode', data.debugMode);
                Storage.set('eventSocket', data.eventSocket);
                const store = configureStore();
                ReactDOM.render(<Provider store={store}>
                    <Router>
                        <App/>
                    </Router>
                </Provider>, document.getElementById('root'));
                registerServiceWorker();
            });
    });
