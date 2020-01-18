import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from './contexts/auth0-context';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <Auth0Provider>
        <App />
    </Auth0Provider>,
    document.getElementById("root"));
registerServiceWorker();
