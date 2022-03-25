import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      isError: false,
      error: false,
    };
  }

  componentDidCatch(error) {
    this.setState({
      isError: true,
      error,
    });
  }

  render() {
    if (this.state.isError) {
      return <h3>Something went wrong: {this.state.error.message}</h3>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
