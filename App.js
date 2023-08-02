import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavbarContainer from './components/navbar';

export default function App() {
	return (
		<View style={styles.container}>
			<NavbarContainer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});
