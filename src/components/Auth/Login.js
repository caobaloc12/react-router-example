import React, { useState } from "react"
import { useHistory, useLocation } from "react-router"

import { useAuth } from "../../useAuth"
import { Row, Col, Input, Button, Spinner } from "reactstrap"
import { Helmet } from "react-helmet"

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const location = useLocation()
  const auth = useAuth()
  const { from } = location.state || { from: { pathname: "/" } }
  const login = async () => {
    setIsLoading(true)
    if (!email || !password) {
      return
    }
    try {
      await auth.signIn(email, password)
      setIsLoading(false)
      history.replace(from)
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Helmet titleTemplate='%s - React App'>
        <title>Login</title>
      </Helmet>
      <Row>
        {isLoading ? (
          <div style={{ margin: "15px auto" }}>
            <Spinner size='sm' color='primary' />
          </div>
        ) : (
          <Col xs='12' lg={{ size: 4, offset: 4 }}>
            <form onSubmit={login}>
              <Input
                className='mb-3'
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                required
              />
              <Input
                className='mb-3'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
              />
              <Button type='submit' color='primary' onClick={login}>
                Log in
              </Button>
            </form>
          </Col>
        )}
      </Row>
    </>
  )
}

export default Login
