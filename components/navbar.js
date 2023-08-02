import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Group from '../components/group';
import Send from '../components/send';
import Receive from '../components/receive';
import Wallet from '../components/wallet';

export default function NavbarContainer() {
	return (
		<View style={styles.NavbarContainer}>
			<Group />
			<Send />
			<Receive />
			<Wallet />
		</View>
	);
}

const styles = StyleSheet.create({
	NavbarContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 280,
		height: 39,
		elevation: 8,
		backgroundColor: '#A010A3',
		color: '#A010A3',
		borderRadius: 20,
		paddingVertical: 0,
		paddingHorizontal: 0,
		marginVertical: 10,
	},
});
