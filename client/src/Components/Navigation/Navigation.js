import React from 'react'
import {Navbar, Container, Nav, Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {  logout } from '../../JS/Actions/AuthActions'

const Navigation = () => {
  const dispatch = useDispatch()

  const isAuth = useSelector((state) => state.AuthReducer.isAuth)


  const logoutUser = () => {
    dispatch(logout())
  }

  return (
    <div className='navigation'>
            <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src="https://www.pharos-arras.fr/sites/default/files/styles/page_teaser/public/images_de_test_a_supprimer/71498434_2391800574262517_2313969705813016576_n.png?itok=46qK9Hyz"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">Billetterie </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/products">Reservation </Nav.Link>
            <Nav.Link href="/add_product">Historique des commande</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            

            {
              isAuth?
              <div>
            <Link to='/profile'>
            <Button   variant="info">Profile</Button>
            </Link>

            <Button Button variant="danger"  onClick={()=> logoutUser()}>Logout</Button>
              </div>
              :
              <div>
            <Link to='/login'>
            <Button  variant="outline-info" >Login</Button>
            </Link>

            <Link to='/register'>
            <Button variant="outline-success" >Register</Button>
            </Link>
              </div>
            }


          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Festival...."
              className="me-2"
              aria-label="Search"

            />
            <Button variant="outline-success">Search</Button>
          </Form>
       
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
