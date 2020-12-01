import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CenariosBotaoComponent from '../components/CenariosBotaoComponent';
import {withNavigation} from 'react-navigation';
const PrincipalScreen = ({navigation}) => {
	return (<View style = {styles.principalStyle}>
			<Image source = {require('../../assets/Logo.png')} style = {styles.logoStyle}/>
			<CenariosBotaoComponent title = "Cenário 1" screen = 'Cenario1' navigation= {navigation}/>
			<CenariosBotaoComponent title = "Cenário 2" screen = 'Cenario2' navigation= {navigation}/>
			<CenariosBotaoComponent title = "Cenário 3" screen = 'Cenario3' navigation= {navigation}/>
		</View>)		
};

///esse navigation= {navigation} é mt pouco otimizado. Fiz isso porqie por alguma razao n consigo importar navigation para CenariosBotaoComponent

const styles = StyleSheet.create({
	principalStyle:{
		backgroundColor: 'rgb(12,19,30)',
		flex:1,
		alignItems: 'center'
	},
	logoStyle: {
		margin: 5,
		marginTop: 50,
		marginBottom: 50,
		height: 180,
		width: 390,
	}
});

export default PrincipalScreen;