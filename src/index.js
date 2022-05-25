import React from "react";
import {createRoot} from "react-dom/client";
import './index.css';
import MainApp from "./MainApp";


const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

root.render(<MainApp/>);