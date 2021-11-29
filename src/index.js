import { render } from "react-dom";
import App from "./components/app";
import "./index.css"

const app = <App />;
const here = document.getElementById("here");

render(app, here);
