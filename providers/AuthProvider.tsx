import { View, Text } from "react-native"
import React, { useState, useEffect } from "react"
import { Session } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase"

export const AuthContext = React.createContext({
	user: {},
	setUser: ({}) => {},
})

export const useAuth = () => React.useContext(AuthContext)

export default function AuthProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [user, setUser] = useState({})
	const [session, setSession] = useState<Session | null>(null)
	useEffect(() => {
		console.log("use effect called ")
		supabase.auth.getSession().then(({ data: { session } }) => {
			console.log(session, ": session")
			setSession(session)
		})
		supabase.auth.onAuthStateChange((_event, session) => {
			console.log("authStatechange", session)
			setSession(session)
		})
	}, [])
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
