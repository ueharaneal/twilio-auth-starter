import { View, Text } from "react-native"
import React, { useState } from "react"
import Layout from "./_layout"
import { useAuth } from "@/providers/AuthProvider"
import { Input, InputField } from "@/components/ui/input"
import { Button, ButtonText } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { useRouter } from "expo-router"
import { useLocalSearchParams } from "expo-router/build/hooks"

export default function Verify() {
	const router = useRouter()
	const { phoneNumber } = useLocalSearchParams()
	const [token, setToken] = useState("")

	console.log("phone", phoneNumber)
	const handleVerify = async () => {
		console.log("hi")
		console.log(phoneNumber)
		const { data, error } = await supabase.auth.verifyOtp({
			phone: phoneNumber as string,
			token: token,
			type: "sms",
		})
		// if (!error) {
		// 	void router.push("/(auth)/username")
		// }
		console.log("data: ", data, error)
	}
	return (
		<Layout onPress={handleVerify} buttonName='Enter OTP'>
			<Text>Verify Text </Text>
			<Input>
				<InputField
					placeholder='Enter OTP'
					value={token}
					onChangeText={setToken}
					keyboardType='phone-pad'
				/>
			</Input>
		</Layout>
	)
}
