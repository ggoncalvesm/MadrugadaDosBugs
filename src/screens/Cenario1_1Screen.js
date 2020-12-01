import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AcoesFaseComponent from '../components/AcoesFaseComponent';

const Cenario1_1Screen = () => {
	return (<View style={styles.cenarioStyle}>
			<Text style={styles.mapaStyle}>Ceanário 1</Text>
			<AcoesFaseComponent style={styles.footerStyle}/>
		</View>);		
};

const styles = StyleSheet.create({
	
	mapaStyle:{
		height: 500,
	},
	footerStyle:{
		flex: 1
	},


});
export default Cenario1_1Screen;