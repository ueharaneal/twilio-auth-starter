import { Tabs } from "expo-router"
import React from "react"
import { Platform } from "react-native"

import { Colors } from "@/constants/Colors"
import Ionicons from "@expo/vector-icons/build/Ionicons"

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#0a7ea4",
				headerShown: false,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							size={28}
							name={focused ? "home" : "home-outline"}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	)
}
