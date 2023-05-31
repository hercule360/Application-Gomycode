import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state)=> state.AuthReducer.user)
  console.log(user) 
  return (
    <div className='profil'>
      <h1>Profile</h1>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2g5KcVBAKFaqJ1NWdI5JlPmzTEvVZZU-Bfg&usqp=CAU" />
      <Card.Body>
        <Card.Title>Name: {user && user.name}</Card.Title>
        <Card.Text>Email: {user && user.email}</Card.Text>
        <Card.Text>Phone: {user && user.phone}</Card.Text>
        <Button  href='/products' variant="outline-success">Reservation</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile
