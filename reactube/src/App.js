import React, { Component } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import data from "./json/data.json";
import NavBarMenu from "./components/NavBarMenu";
class App extends Component {
  state = {
    videos: data,
    selectedVideo: null,
  };

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: null,
    });
    console.log(this.state.videos);
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <section>
            <Row>
              <Col xs={2} className="bg-menu text-white">
                <NavBarMenu />
              </Col>
              <Col xs={10} className="bg-dark">
                <Row>
                  <Col xs={12}>
                    <SearchBar handleFormSubmit={this.handleSubmit} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <VideoDetail
                      video={this.state.selectedVideo}
                      videoDefault={this.state.videos[0]}
                    />
                  </Col>
                </Row>
                <h5 className="pt-2 text-white">Related Video</h5>
                <Row>
                  <Col xs={12}>
                    <div className="border rounded border-primary-2 mt-2 mb-4">
                      <Row className="d-flex row m-2 p-2">
                        <VideoList
                          videos={this.state.videos}
                          handleVideoSelect={this.handleVideoSelect}
                        />
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default App;
