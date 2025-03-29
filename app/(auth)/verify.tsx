import { View, Text } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import Verify from "@/screens/auth/Verify"
const verify = () => {
	return (
		<SafeAreaView>
			<Verify />
		</SafeAreaView>
	)
}

export default verify
