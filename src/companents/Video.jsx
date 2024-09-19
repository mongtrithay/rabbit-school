import React from 'react';
// import Css from './App.css';

const VideoPlayer = () => {
  const videoId = 'weoz8UpPkJY';
  
  return (
    <div className="video-wrapper">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
