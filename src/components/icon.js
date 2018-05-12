import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Icon extends React.Component{
	render(){
		if(this.props.choice === 'rock'){
			return(
				<View style={styles.icons}>
					<Text style={styles.textPlayer}>{this.props.player}</Text>
					<Image source={require('../../imgs/rock.png')} />
				</View>
			)
		}
		else if(this.props.choice === 'paper'){
			return(
				<View style={styles.icons}>
					<Text style={styles.textPlayer}>{this.props.player}</Text>
					<Image source={require('../../imgs/paper.png')} />
				</View>
			)
		}
		else if(this.props.choice === 'scissors'){
			return(
				<View style={styles.icons}>
					<Text style={styles.textPlayer}>{this.props.player}</Text>
					<Image source={require('../../imgs/scissors.png')} />
				</View>
			)
		}
		else
			return false
	}
}

const styles = StyleSheet.create({
	icons: {
		alignItems: 'center',
		paddingTop: 20,
		marginBottom: 20
	},
	textPlayer:{
		fontSize: 18
	}
});

export default Icon