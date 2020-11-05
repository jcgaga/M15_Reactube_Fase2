import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class NavBarMenu extends Component {
  render() {
    return (
      <div>
        <div className="pb-5">Logo + Reactube</div>
        <div className="pb-5 mt-5">
          <h6>MENU</h6>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home" className="text-white">Home</Nav.Link>
            <Nav.Link href="/history" className="text-white">History</Nav.Link>
            <Nav.Link href="/likedVideos" className="text-white">Liked Videos</Nav.Link>
            <Nav.Link href="/savedVideos" className="text-white">Saved Videos</Nav.Link>
          </Nav>
        </div>
        <div className="pt-5">
          <h6>TOOLS</h6>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/apiTester" className="text-white">API tester</Nav.Link>
            <Nav.Link href="/analytics" className="text-white">Analytics</Nav.Link>
            <Nav.Link href="/unitTests" className="text-white">Unit tests</Nav.Link>
          </Nav>
        </div>
      </div>
    );
  }
}

export default NavBarMenu;
