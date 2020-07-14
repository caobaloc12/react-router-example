import React, { useState, useContext, createContext } from "react"
import storage from "local-storage-fallback"

const authContext = createContext()

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext)
}

const getLoggedInUser = () => {
  try {
    return JSON.parse(storage.getItem("user"))
  } catch (error) {
    return null
  }
}

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(getLoggedInUser())

  const signIn = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser({ email })
        storage.setItem("user", JSON.stringify({ email }))
        resolve(true)
      }, 1500)
    })
  }

  const signOut = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(null)
        storage.removeItem("user")
        resolve(true)
      }, 500)
    })
  }

  // Return the user object and auth methods
  return {
    user,
    signIn,
    signOut,
  }
}
