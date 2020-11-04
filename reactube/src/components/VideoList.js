import React from "react";
import { Row, Col } from "react-bootstrap";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <Col xs={12} key={video.id.videoId}>
        <VideoItem
          
          video={video}
          handleVideoSelect={handleVideoSelect}
        />
        <hr size="2px" color="silver"/>
      </Col>
    );
  });

  return <Row>{renderedVideos}</Row>;
};

export default VideoList;
