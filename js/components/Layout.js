import React from "react";

import Header from "./Header";
import Events from "./Events";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
        name: "Caleb",
        meetings: 0,
        opportunities: 0,
        quotes: 0,
        tasks: 0
    }
  }

  changeName(name) {
    this.setState({name})
  }

  componentDidMount() {
    var that = this
    fetch('/mock/meetings.json', {
    }).then(function(response){
        return response.json()
    }).then(function(j){that.setState({meetings: j.length})})

    fetch('/mock/opportunities.json', {
      method: 'GET'
    }).then(function(response){
        return response.json()
    }).then(function(j){that.setState({opportunities: j.length})})

    fetch('/mock/quotes.json', {
      method: 'GET'
    }).then(function(response){
        return response.json()
    }).then(function(j){that.setState({quotes: j.length})})

    fetch('/mock/tasks.json', {
      method: 'GET'
    }).then(function(response){
        return response.json()
    }).then(function(j){that.setState({tasks: j.length})})
  }

  render() {

    return (
      <div>
        <Header changeName={this.changeName.bind(this)} name={this.state.name}/>

        <Events
          meetings={this.state.meetings}
          opportunities={this.state.opportunities}
          quotes={this.state.quotes}
          tasks={this.state.tasks}
          />

        <Footer changeName={this.changeName.bind(this)} name={this.state.name}/>
      </div>
    );
  }
}
