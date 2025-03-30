import { View, Text } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAuth } from "@/providers/AuthProvider"
import { Input, InputField } from "@/components/ui/input"
import { Button, ButtonText } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { useRouter } from "expo-router"
import Layout from "./_layout"

export default function index() {
	const router = useRouter()
	const { user, setUser } = useAuth()
	const [phoneNumber, setPhoneNumber] = useState("")

	const handleSignIn = async () => {
		console.log("hi")
		console.log(phoneNumber)
		setUser({
			name: "John Doe",
		})
		const { data, error } = await supabase.auth.signInWithOtp({
			phone: "+19496833881",
		})
		if (!error) {
			void router.push({
				pathname: "/(auth)/verify",
				params: { phoneNumber: "+19496833881" },
			})
		}
		console.log("data: ", data, error)
	}
	return (
		<Layout onPress={handleSignIn} buttonName='Enter phone number'>
			<Input>
				<InputField
					placeholder='Enter Phone Number'
					value={phoneNumber}
					onChangeText={setPhoneNumber}
					keyboardType='phone-pad'
				/>
			</Input>
		</Layout>
	)
}
