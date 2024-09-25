import React from "react";
// import './App.css'; // Ensure this path is correct

const VideoOurAction = () => {
  // New YouTube video ID
  const videoId = "qU-j2vfq5bw";

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

export default VideoOurAction;
