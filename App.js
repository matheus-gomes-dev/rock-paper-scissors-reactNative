import React from 'react';
import { View, Text, Button, Image } from 'react-native';


export default class App extends React.Component {

  	constructor(props){
		super(props);
  		this.state = {userChoice: '', computerChoice: '', result: ''};
  	}

  	game(userChoice){
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

  		//defining game result
  		let result = '';
  		if(computerChoice === 'rock'){
  			if(userChoice === 'rock')
  				result = 'Draw'
  			else if(userChoice === 'paper')
  				result = 'User Win!'
  			else
  				result = 'Computer Win!'
  		}
  		else if(computerChoice === 'paper'){
  			if(userChoice === 'paper')
  				result = 'Draw'
  			else if(userChoice === 'scissors')
  				result = 'User Win!'
  			else
  				result = 'Computer Win!'
  		}
  		else if(computerChoice === 'scissors'){
  			if(userChoice === 'scissors')
  				result = 'Draw'
  			else if(userChoice === 'rock')
  				result = 'User Win!'
  			else
  				result = 'Computer Win!'
  		}

  		this.setState({userChoice, computerChoice, result});

  	}

  	render() {
	    return (
	    	<View>
	    		<Top></Top>
		      	<Text>Computer's choice: {this.state.computerChoice}</Text>
	    	  	<Text>User's choice: {this.state.userChoice}</Text>
	      		<Text>Result: {this.state.result}</Text>
	      		<Button title='rock' onPress={ () => this.game('rock') }></Button>
	      		<Button title='paper' onPress={ () => this.game('paper') }></Button>
	      		<Button title='scissors' onPress={ () => this.game('scissors') }></Button>
	      	</View>
	    );
  	}
}

class Top extends React.Component{
	render(){
		return(
			<View>
				<Image source={ require('./imgs/jokenpo.png') } />
			</View>
		);
	}
}

