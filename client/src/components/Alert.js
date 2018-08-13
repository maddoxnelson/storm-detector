import React, { Component } from 'react';

class Alert extends Component {
  render() {
    const { type, event, description, zones, headline } = this.props;
    return (
      <div className="flex-item">
        <div className={type}>{type}</div>
        <div><strong>{event}</strong></div>
        <textarea defaultValue={zones}></textarea>
        <p>{description}</p>
      </div>
    )
  }
}

export default Alert;