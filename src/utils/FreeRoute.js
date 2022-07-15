import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
function FreeRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) => {
        return !currentUser ? <Component {...props} /> : <Redirect to="/" />
      }}
    />
  )
}

export default FreeRoute