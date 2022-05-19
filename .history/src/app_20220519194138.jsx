import React, { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState('ellie');

  useEffect(()=>{
    console.log('useEffect');
  }, []);

  return <h1>Hello :)</h1>;
}

export default App;
