import React from "react";

export default class Events extends React.Component {

  render() {
    return (
      <section className="callout large-12 columns widget-main">

        <h3 className="widget-header primary row">Upcoming Events</h3>
        <h5 className="widget-date">{new Date().toDateString()}</h5>

        <div className="row btn-wrapper">
          <button className="button large-2 medium-2 columns btn-sort" type="button" name="today">today</button>
          <button className="button large-2 medium-2 columns btn-sort" type="button" name="week">7 day</button>
          <button className="button large-2 medium-2 columns btn-sort" type="button" name="month">30 day</button>
          <button className="button large-2 medium-2 columns btn-sort" type="button" name="all">All</button>
        </div>

        <div className="row cat-wrapper">

                <div className="large-3 medium-3 columns">
                    <span className="cat-num"><b>{this.props.meetings}</b> </span>
                    <h4>Meetings</h4>

                </div>
                <div className="large-3 medium-3 columns">
                    <span class="cat-num"><b>{this.props.opportunities}</b> </span>
                    <h4>Opportunities</h4>

                </div>

                <div className="large-3 medium-3 columns">
                    <span className="cat-num"><b>{this.props.quotes}</b> </span>
                    <h4>Quotes</h4>

                </div>

                <div className="large-3 medium-3 columns">
                    <span className="cat-num"><b>{this.props.tasks}</b></span>
                    <h4>Tasks</h4>

                </div>

        </div>

      </section>
    );
  }
}
