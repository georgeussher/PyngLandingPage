import * as React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

export default function AppButton({ title, backgroundColor, borderColor }) {
	const handleButtonPress = () => {
		console.log('Button pressed!');
	};

	const styles = StyleSheet.create({
		appButtonContainer: {
			width: 271,
			height: 44,
			elevation: 8,
			backgroundColor: backgroundColor,
			borderRadius: 50,
			paddingVertical: 10,
			paddingHorizontal: 12,
			borderColor: borderColor,
			borderWidth: 1,
			marginVertical: 8,
		},
		appButtonText: {
			fontSize: 18,
			color: '#fff',
			fontWeight: 'bold',
			alignSelf: 'center',
			textTransform: 'uppercase',
		},
	});

	return (
		<Pressable onPress={handleButtonPress} style={styles.appButtonContainer}>
			<Text style={styles.appButtonText}>{title}</Text>
		</Pressable>
	);
}
