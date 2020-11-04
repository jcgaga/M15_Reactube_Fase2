import React from "react";
import { Col, Row } from "react-bootstrap";

const VideoDetail = ({ video, videoDefault }) => {
  if (video === null) {
    video = videoDefault;
  }

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Row>
      <Col xs={12} className="pb-5">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={videoSource}
            title="Video"
          ></iframe>
        </div>
      </Col>
      <Col xs={12} className="border rounded">
        <h4 className="pt-3 pl-3">{video.snippet.title}</h4>
        <p className="pt-3 pl-3">{video.snippet.description}</p>
      </Col>
    </Row>
  );
};

export default VideoDetail;
