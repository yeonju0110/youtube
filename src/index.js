import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import Youtube from './service/youtube';
import axios from 'axios';

document.cookie = "safeCookie1=foo; SameSite=Lax";
document.cookie = "safeCookie2=foo";
document.cookie = "crossCokie=bar; SameSite=None; Secure";

const root = ReactDOM.createRoot(document.getElementById('root'));
const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {key: process.env.REACT_APP_YOUTUBE_API_KEY},
});
const youtube = new Youtube(httpClient);

root.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>
);