import { Image, StyleSheet, View } from "react-native"
import { HStack } from "@/components/ui/hstack"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "@/components/ui/text"
export default function Home() {
	return (
		<SafeAreaView>
			<HStack className='justify-between'>
				<Text className='text-blue-500 text-4xl'>Home</Text>
				<Text className='text-blue-500 text-4xl'>Test</Text>
			</HStack>
		</SafeAreaView>
	)
}
