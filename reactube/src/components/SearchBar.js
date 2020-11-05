import React, { Component } from "react";
import { Form } from "react-bootstrap";

class SearchBar extends Component {
  state = {
    search: "",
  };
  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.search);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group role="form">
          <Form.Control
            type="text"
            value={this.state.search}
            placeholder="Search..."
            onChange={this.handleChange}
            className="form-control bg-dark border-0"
            spellCheck="false"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBar;
