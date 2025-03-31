import {
	View,
	Text,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Platform,
	Keyboard,
} from "react-native"
import React from "react"
import { SafeAreaView } from "react-native"
import ThreadsIcon from "@/assets/svg/ThreadsIcon"
import { VStack } from "@/components/ui/vstack"
import { Button, ButtonText } from "@/components/ui/button"

export default ({
	children,
	buttonName,
	onPress,
}: {
	children: React.ReactNode
	buttonName: string
	onPress: () => void
}) => {
	return (
		<SafeAreaView>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View className='justify-between h-full w-full '>
						<VStack className='items-center justify-center'>
							<ThreadsIcon size={40} />
							<Text className='text-2xl font-bold'>Twilio Auth App</Text>
						</VStack>
						{children}
						<VStack>
							<Button className='items-center' onPress={onPress}>
								<ButtonText className='text-2xl font-bold'>
									{buttonName}{" "}
								</ButtonText>
							</Button>
						</VStack>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}
