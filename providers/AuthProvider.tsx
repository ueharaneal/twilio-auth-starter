import { View, Text } from "react-native"
import React, { useState } from "react"

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
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
