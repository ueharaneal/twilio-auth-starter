import { View, Text } from "react-native"
import React, { useState, useEffect } from "react"
import { Session } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase"
import { useRouter } from "expo-router"

export const AuthContext = React.createContext({
	user: {},
	setUser: ({}) => {},
	logOut: () => {},
})

export const useAuth = () => React.useContext(AuthContext)

export default function AuthProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [user, setUser] = useState({})
	const [session, setSession] = useState<Session | null>(null)

	const router = useRouter()

	const getUser = async (session: Session | null) => {
		if (session) {
			router.push("/(tabs)")
			// const {
			// 	data: { session },
			// } = await supabase.auth.getSession()
			// //when were ready get the actual user from the database
			// return session?.user
		}
		return
	}

	const logOut = async () => {
		await supabase.auth.signOut()
		router.push("/(auth)")
	}

	useEffect(() => {
		console.log("use effect called ")
		supabase.auth.getSession().then(({ data: { session } }) => {
			console.log(session, ": session")
			setSession(session)
			getUser(session)
		})
		supabase.auth.onAuthStateChange((_event, session) => {
			console.log("authStatechange", session)
			setSession(session)
			getUser(session)
		})
	}, [])
	return (
		<AuthContext.Provider value={{ user, setUser, logOut }}>
			{children}
		</AuthContext.Provider>
	)
}
