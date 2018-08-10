import React, { Component } from 'react';


class Alert extends Component {




render() {


const { type, event, description, zones, headline } = this.props;
return (
<div class="flex-item">
<div class={type}>{type}</div>
<div><strong>{event}</strong></div>
<textarea>{zones}</textarea>
<p>{description}</p>
</div>
)
}
}


export default Alert;