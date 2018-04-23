import React from 'react';
import { View, Text, Button } from 'react-native';


export default class App extends React.Component {

  	constructor(props){
		super(props);
  		this.state = {userChoice: '', computerChoice: ''};
  	}

  	game(userChoice){
  		//random number >=0 and < 3
  		let randomNumber = Math.floor(Math.random()*3);
  		let computerChoice = '';
  		switch(randomNumber){
  			case 0: 
  				computerChoice = 'rock';
  				break;
  			case 1:
  				computerChoice = 'paper';
  				break;
  			case 2:
	  			computerChoice = 'scissors';
  				break;
  		}
  		this.setState({userChoice, computerChoice});
  	}

  	render() {
	    return (
	    	<View>
		      	<Text>Computer's choice: {this.state.computerChoice}</Text>
	    	  	<Text>User's choice: {this.state.userChoice}</Text>
	      		<Text>Result:</Text>
	      		<Button title='rock' onPress={ () => this.game('rock') }></Button>
	      		<Button title='paper' onPress={ () => this.game('paper') }></Button>
	      		<Button title='scissors' onPress={ () => this.game('scissors') }></Button>
	      	</View>
	    );
  	}
}


