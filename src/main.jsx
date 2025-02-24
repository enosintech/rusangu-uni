import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import React from "react";
import App from './App.jsx'
import './index.css'
import SmoothScroll from "./components/SmoothScroll.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </BrowserRouter>
  </React.StrictMode>,
);
