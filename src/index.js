import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import App from "./components/App";
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
