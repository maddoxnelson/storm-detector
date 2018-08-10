import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Alert from './components/Alert';




class App extends Component {


constructor() {
super()


this.state = {


alerts: []
}
}


componentDidMount() {


this.getAlerts()
}


getAlerts() {


fetch('/api/active')
.then(res => res.json())
.then(alerts => this.setState({ alerts }));
}


render() {


return (
<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<div className="flex-row">
{
this.state.alerts.map(alert => {
const { type, affectedZones, event, headline, description } = alert
return (
<Alert type={type} event={event} headline={headline} description={description} zones={affectedZones.join(',')} />
)
})
}
</div>


</div>


);
}
}


export default App;