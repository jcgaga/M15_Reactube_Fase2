import React from "react";
import { Col } from "react-bootstrap";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <Col xs={2} key={video.id.videoId}>
        <VideoItem 
          video={video}
          handleVideoSelect={handleVideoSelect}
        />
      </Col>
    );
  });

  return renderedVideos;
};

export default VideoList;
