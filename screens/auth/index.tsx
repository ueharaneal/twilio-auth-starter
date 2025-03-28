import { View, Text } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAuth } from "@/providers/AuthProvider"
import { Input, InputField } from "@/components/ui/input"
import { Button, ButtonText } from "@/components/ui/button"

export default function index() {
	const { user, setUser } = useAuth()
	const [phone, setPhone] = useState()

	const handleSignIn = () => {
		console.log(phone)
		setUser({
			name: "John Doe",
		})
	}
	return (
		<SafeAreaView>
			<Input>
				<InputField
					placeholder='Enter Phone Number'
					value={phone}
					onChangeText={setPhone}
					keyboardType='phone-pad'
					secureTextEntry={true}
				/>
			</Input>
			<Button onPress={handleSignIn}>
				<ButtonText>Sign in</ButtonText>
			</Button>
		</SafeAreaView>
	)
}
