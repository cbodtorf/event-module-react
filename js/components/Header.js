import React from "react";

export default class Header extends React.Component {
  handleChange(e) {
    const name = e.target.value;
    this.props.changeName(name);
  }

  render() {
    return (
      <div >
        <header><h1>Component testing</h1></header>
        <span class="row">name:</span>
        <input onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
