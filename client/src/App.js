import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import ReconnectingWebSocket from 'reconnecting-websocket';

import Alert from './components/Alert';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.rws;
    this.state = {
      count: null,
      alerts: []
    };
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.rws = new ReconnectingWebSocket(`ws://${window.location.hostname}:3001`);
    this.rws.addEventListener('message', this.updateData);
  }

  componentWillUnmount() {
    this.rws.removeEventListener('message', this.updateData);
  }

  updateData(message) {
    const { count, data: alerts = [] } = JSON.parse(message.data);
    this.setState({ count, alerts });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          Count:
          &nbsp;
          {this.state.count}
        </p>
        <div className="flex-row">
          {
            this.state.alerts.map((alert, index) => {
              const { type, affectedZones, event, headline, description } = alert
              const zones = affectedZones.join(',')
              return (
                <Alert key={`${index}-${zones}`} type={type} event={event} headline={headline} description={description} zones={zones} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;