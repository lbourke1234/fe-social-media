import { useState } from 'react'
import { Form, Button, Container, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setBearerTokenAction } from '../redux/actions'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginFailed, setLoginFailed] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginData = {
    email,
    password
  }

  const fetchLogin = async (e) => {
    e.preventDefault()
    const response = await fetch(process.env.REACT_APP_LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    if (response.ok) {
      const body = await response.json()
      console.log('body in login fetch', body)
      localStorage.setItem('token', JSON.stringify(body.token))
      dispatch(setBearerTokenAction(body.token))
      navigate('/')
    } else {
      console.log('login not successful')
      setLoginFailed(true)
    }
  }

  return (
    <Container className="login-container">
      <h1>Existing users log in here!</h1>
      <Form onSubmit={(e) => fetchLogin(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {loginFailed && (
          <Alert className="mt-3" variant={'danger'}>
            Email and Password don't match. Please click below to register!
          </Alert>
        )}
      </Form>
      <span className="register-here-button" onClick={() => navigate('/register')}>
        Click here to create an account!
      </span>
    </Container>
  )
}
export default LoginPage
