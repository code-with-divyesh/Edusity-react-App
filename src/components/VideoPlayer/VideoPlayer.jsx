import React, { useRef } from "react";
import "./VideoPlayer.css";
import { assets } from "../../assets";
const VideoPlayer = ({ playState, SetPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      SetPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"} `}
      ref={player}
      onClick={closePlayer}
    >
      <video src={assets.clgVideo} muted autoPlay controls></video>
    </div>
  );
};

export default VideoPlayer;
