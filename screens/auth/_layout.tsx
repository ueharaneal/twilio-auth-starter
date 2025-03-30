import { View, Text } from "react-native"
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
			<VStack className='items-center  gap-y-3'>
				<ThreadsIcon size={50} />
				<Text className='text-2xl font-bold'>Twilio Auth App</Text>
			</VStack>
			{children}
			<Button className='items-center' onPress={onPress}>
				<ButtonText className='text-2xl font-bold'>
					{buttonName}{" "}
				</ButtonText>
			</Button>
		</SafeAreaView>
	)
}
