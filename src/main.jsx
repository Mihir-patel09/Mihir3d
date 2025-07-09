import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import emailjs from '@emailjs/browser';

// initialize EmailJS as soon as your app boots:
emailjs.init(process.env.REACT_APP_EMAILJS_USERID);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <App />

);
