import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <Row
      onClick={() => handleVideoSelect(video)}
      className="d-flex flex-wrap align-items-center"
    >
      <Col>
        <Image src={video.snippet.thumbnails.default.url}></Image>
      </Col>
      <Col>
        <h5>{video.snippet.title}</h5>
      </Col>
    </Row>
  );
};

export default VideoItem;
