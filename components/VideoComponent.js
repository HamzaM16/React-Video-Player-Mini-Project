import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const VideoDropdown = () => {
  const [selectedVideo, setSelectedVideo] = useState({
    name: "Default Video",
    url: "https://www.youtube.com/watch?v=H4kiRgPdPCs&pp=ygUNSE9MTE9XIFZTIFJPQw%3D%3D"
  });
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);

  const videoLinks = [
    { name: "Mook vs Bigg K ", url: "https://www.youtube.com/watch?v=K6lsA1Vo3bc&t=1507s&pp=ygUDVVJM" },
    { name: "Chess vs Twork", url: "https://www.youtube.com/watch?v=u_WEMpCSo6c&t=251s&pp=ygUDVVJM" },
    { name: "Tsu Surf vs Tay Roc", url: "https://www.youtube.com/watch?v=Ur3JQAYYHi0&t=1295s&pp=ygUNSE9MTE9XIFZTIFJPQw%3D%3D" },
    { name: "Rum Nitty vs A-ward", url: "https://www.youtube.com/watch?v=uKe8YswsFcs&pp=ygUNUnVtIHZzYSBhd2FyZA%3D%3D" },
    { name: "Aye Verb vs Twork", url: "https://www.youtube.com/watch?v=45zwu0-u9n8&pp=ygUOdmVyYiB2cyB0d3Bvcms%3D" },
    { name: "Reed Dollaz vs Eazy The Block Captain", url: "https://www.youtube.com/watch?v=-ro47aN1Psw&pp=ygUWZWF6eSB0aGUgYmxvY2sgY2FwdGFpbg%3D%3D" },
  ];

  const handleVideoSelection = (video) => {
    setSelectedVideo(video);
    setProgress(0);
  };

  const handleProgress = (event) => {
    const playedSeconds = event.playedSeconds || 0;
    const duration = playerRef.current.getDuration();
    const videoProgress = playedSeconds / duration;
    setProgress(videoProgress);
  };

  return (
    
    <div className="container">
      <div className="centered">
        <div className="video-dropdown-box">
          <DropdownButton id="dropdown-basic-button" title="Select Videos Below">
            {videoLinks.map((link) => (
              <Dropdown.Item
                key={link.url}
                onClick={() => handleVideoSelection(link)}
                className="dropdown-item-box"
              >
                {link.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <div className="video-player">
          <ReactPlayer
            ref={playerRef}
            url={selectedVideo.url}
            onProgress={handleProgress}
          />
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDropdown;
