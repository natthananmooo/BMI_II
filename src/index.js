import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import Hello from './Hello';
import Counter from './Counter';
import BMI from './BMI';
import Bmi_II from './Bmi_II';
import PackingList from './PackingList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Bmi_II/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))  <App />
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
