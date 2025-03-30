import React, { Component } from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, ButtonText } from "@/components/ui/button"
import { useAuth } from "@/providers/AuthProvider"

export default function Settings() {
	const { logOut } = useAuth()
	return (
		<SafeAreaView>
			<View>
				<Text>Settings</Text>
				<Button onPress={logOut}>
					<ButtonText>Log out</ButtonText>
				</Button>
			</View>
		</SafeAreaView>
	)
}
