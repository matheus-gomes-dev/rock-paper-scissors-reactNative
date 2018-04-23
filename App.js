import React from 'react';
import { View, Text, Button } from 'react-native';


export default class App extends React.Component {

  	constructor(props){
		super(props);
  		this.state = {userChoice: ''};
  	}

  	game(userChoice){
  		this.setState({userChoice: userChoice});
  	}

  	render() {
	    return (
	    	<View>
		      	<Text>Computer's choice:</Text>
	    	  	<Text>User's choice: {this.state.userChoice}</Text>
	      		<Text>Result:</Text>
	      		<Button title='rock' onPress={ () => this.game('rock') }></Button>
	      		<Button title='paper' onPress={ () => this.game('paper') }></Button>
	      		<Button title='scissors' onPress={ () => this.game('scissors') }></Button>
	      	</View>
	    );
  	}
}


