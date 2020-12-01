import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AcoesFaseComponent = ({texto}) => {
	return (<View style = {styles.footerStyle}>
			<View style = {styles.objetosBotaoStyle}>
				<Text>Objetivo Atual</Text>
				<Text>Monstros</Text>
				<Text>Artefatos produzidos</Text>
			</View>
			<View style = {styles.passarBotaoStyle}>
				<Text>Passar fase</Text>
			</View>
		</View>);		
};

const styles = StyleSheet.create({
	footerStyle:{
		flexDirection: 'row',
	},
	objetosBotaoStyle: {
		justifyContent: 'flex-start',
		flexDirection: 'row',
	},
	passarBotaoStyle: {
		justifyContent: 'flex-end',
	}
});

export default AcoesFaseComponent;