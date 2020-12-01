import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CenariosBotaoComponents = ({title, screen, navigation}) => {
	return (<View style = {styles.botaoStyle}>
			<TouchableOpacity onPress={() => navigation.navigate(screen)}>
				<Text style = {styles.textoStyle}>{title}</Text>
			</TouchableOpacity>
		</View>)		
};

const styles = StyleSheet.create({
	botaoStyle: {
		borderColor: 'rgb(90, 250, 1)',
		borderWidth: 1,
		margin: 5,
		padding: 5,
		height: 40,
		width: 130,
	},
	textoStyle: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
    	fontSize: 18,
	}
});

export default CenariosBotaoComponents;