import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function wallet() {
	return (
		<Pressable style={styles.WalletButton}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={31}
				height={29}
				fill='none'
			>
				<path
					fill='#fff'
					stroke='#fff'
					strokeWidth={2}
					d='M4.932 27.043H25.46a3.932 3.932 0 0 0 3.932-3.933V9.914a3.932 3.932 0 0 0-3.932-3.932H4.932A3.932 3.932 0 0 0 1 9.914V23.11a3.932 3.932 0 0 0 3.932 3.933Z'
				/>
				<path
					stroke='#A010A3'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M20.061 16.513a1.733 1.733 0 1 0 3.467 0 1.733 1.733 0 0 0-3.467 0Z'
				/>
				<mask
					id='a'
					width={26}
					height={11}
					x={0}
					y={-1}
					fill='#000'
					maskUnits='userSpaceOnUse'
				>
					<path fill='#fff' d='M0-1h26v11H0z' />
					<path d='M23.994 6.982V4.934a2.932 2.932 0 0 0-3.689-2.833L4.177 6.4A2.932 2.932 0 0 0 2 9.236v.68' />
				</mask>
				<path
					fill='#fff'
					d='M20.305 2.1 19.79.169l.515 1.933ZM4.177 6.403l-.515-1.933.515 1.933Zm21.817.58V4.934h-4v2.048h4Zm0-2.048c0-3.24-3.072-5.6-6.204-4.766l1.03 3.865a.932.932 0 0 1 1.174.901h4ZM19.79.168 3.662 4.47l1.03 3.865 16.129-4.3L19.79.167ZM3.662 4.47A4.932 4.932 0 0 0 0 9.235h4c0-.422.284-.792.692-.901l-1.03-3.865ZM0 9.235v.68h4v-.68H0Z'
					mask='url(#a)'
				/>
			</svg>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	WalletButton: {
		width: 68,
		height: 35,
		elevation: 8,
		backgroundColor: '#A010A3',
		color: '#A010A3',
		borderRadius: 22,
		marginVertical: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
