import React, { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState('ellie');

  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyANgIXzlCknvL99xFpqnlN7SQhHN9f2_yY", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);

  return <h1>Hello :)</h1>;
}

export default App;
