import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Group() {
	return (
		<Pressable style={styles.GroupButton}>
			<View>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={39}
					height={32}
					fill='none'
				>
					<path
						fill='#fff'
						d='M4.455 9.333 3.001 7.82 1.423 9.333l1.578 1.515 1.454-1.515ZM32.901 13a2.1 2.1 0 1 0 4.2 0h-4.2ZM10.637.485 3 7.82l2.909 3.029 7.636-7.333-2.91-3.03ZM3 10.848l7.636 7.333 2.909-3.029L5.91 7.819 3 10.848Zm1.454.585h28.546v-4.2H4.455v4.2Zm28.446-.1V13h4.2v-1.667h-4.2Zm.1.1a.1.1 0 0 1-.1-.1h4.2a4.1 4.1 0 0 0-4.1-4.1v4.2ZM35 23.333l1.392-1.572 1.776 1.572-1.776 1.573L35 23.333Zm-30 0v-2.1 2.1ZM.9 20a2.1 2.1 0 1 1 4.2 0H.9Zm27.963-4.906 7.53 6.667-2.785 3.145-7.53-6.667 2.785-3.145Zm7.53 9.812-7.53 6.666-2.785-3.144 7.53-6.667 2.784 3.145ZM35 25.433H5v-4.2h30v4.2Zm-34.1-4.1V20h4.2v1.333H.9Zm4.1 4.1a4.1 4.1 0 0 1-4.1-4.1h4.2a.1.1 0 0 0-.1-.1v4.2Z'
					/>
				</svg>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	GroupButton: {
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
