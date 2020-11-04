import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import data from "./json/data.json";
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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <code>REACTUBE FASE 1</code>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <section className="p-3">
            <Row className="border rounded mb-3">
              <Col xs={12}>
                <SearchBar handleFormSubmit={this.handleSubmit} />
              </Col>
            </Row>
            <Row>
              <Col xs={8}>
                <VideoDetail
                  video={this.state.selectedVideo}
                  videoDefault={this.state.videos[0]}
                />
              </Col>
              <Col xs={4}>
                <VideoList
                  videos={this.state.videos}
                  handleVideoSelect={this.handleVideoSelect}
                />
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default App;
