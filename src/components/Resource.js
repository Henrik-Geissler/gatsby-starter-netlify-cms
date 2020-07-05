import React, { Component } from "react";
import ResourceContext from "./ResourceContext";
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
      return (
        <ResourceContext.Provider value={payload}>
          {this.props.render(payload)}
        </ResourceContext.Provider>
      );
    }
  }
}
export default Resource;
