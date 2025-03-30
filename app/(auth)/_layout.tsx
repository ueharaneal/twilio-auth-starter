import { Stack } from "expo-router"

export default () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='verify' />
			<Stack.Screen name='username' />
		</Stack>
	)
}
