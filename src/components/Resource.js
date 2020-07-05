import React, { Component } from "react";
class Resource extends Component {
  state = {
    loading: true,
    error: null,
    payload: [],
  };

  componentDidMount() {
    fetch(this.props.path)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            payload: result,
          });
        },
        (error) => {
          this.setState({
            loading: false,
            error: error,
          });
        }
      );
  }

  render() {
    const { error, loading, payload } = this.state;
    if (error) {
      return <>Error: {error.message}</>;
    } else if (loading) {
      return <>Loading...</>;
    } else {
      return this.props.render(payload);
    }
  }
}
export default Resource;
