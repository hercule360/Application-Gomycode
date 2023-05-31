import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login } from '../../JS/Actions/AuthActions'
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [user, setUser] = useState({})

  const handleChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  }

  const handleUser = (e) => {
    e.preventDefault()
    dispatch(login(user))
    navigate('/profile')
  }
  return (
    <div className='login'>
      <Spinner animation="grow" />
      <h1>Login</h1>
          <Form.Group>

          <Form.Label>Email</Form.Label>
          <Form.Control name='email' type='email' onChange={handleChange}></Form.Control>

          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type='password' onChange={handleChange}></Form.Control>

          <Button   variant="success" onClick={handleUser}>Login</Button>

        </Form.Group>
    </div>
  )
}

export default Login
