import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	fullscreen: false
	  };
	}

	handleClick = () => {
		if( ! this.state.fullscreen) {
			this.setState({ fullscreen: true });
		} else {
			this.setState({ fullscreen: false });
		}
	}

	render() {
		return (
			<div>
				<Content dataProp={this.state.fullscreen ? 'is full' : 'default'} updateProp={this.handleClick} />
			</div>
		);
	}
}

class Content extends Component {
	render() {
		return(
			<div>
				<button onClick={this.props.updateProp}>Hoho</button>
				<p><b>{this.props.dataProp}</b></p>
			</div>
		);
	}
}
