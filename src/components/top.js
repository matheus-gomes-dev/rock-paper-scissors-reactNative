import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Top extends React.Component{
	render(){
		return(
			<View>
				<Image source={ require('../../imgs/jokenpo.png') } />
			</View>
		);
	}
}

export default Top