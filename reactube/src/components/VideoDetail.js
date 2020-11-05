import React from "react";
import { Col, Row } from "react-bootstrap";

const VideoDetail = ({ video, videoDefault }) => {
  if (video === null) {
    video = videoDefault;
  }

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="border rounded border-primary-2">
      <Row className="bg-white m-2 p-2 border rounded">
        <Col xs={7} className="">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={videoSource}
              title="Video"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col xs={5} className="d-flex row align-items-start">
          <h4 className="">{video.snippet.title}</h4>
          <p className="">{video.snippet.description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default VideoDetail;
