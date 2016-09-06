import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="primary callout large-12 columns">by: {this.props.name}</footer>

    );
  }
}
