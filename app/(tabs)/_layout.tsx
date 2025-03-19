import { Tabs } from "expo-router"
import React from "react"
import { Platform } from "react-native"

import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function TabLayout() {
	const router = useRouter()
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
			<Tabs.Screen
				name='post'
				options={{
					title: "",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							size={28}
							name={focused ? "add" : "add-outline"}
							color={color}
						/>
					),
				}}
				listeners={{
					tabPress: () => {
						router.push("/post")
					},
				}}
			/>
			<Tabs.Screen
				name='settings'
				options={{
					title: "Settings",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							size={28}
							name={focused ? "settings" : "settings-outline"}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	)
}
