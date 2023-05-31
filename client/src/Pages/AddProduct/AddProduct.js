import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../../JS/Actions/ProductActions'
import Spinner from 'react-bootstrap/Spinner';


const AddProduct = () => {

  const dispatch = useDispatch()
  const [newProduct, setNewProduct] = useState({name: "", description: "", price: 0})

  const handleChange = (e) => {
    setNewProduct({...newProduct, [e.target.name] : e.target.value})
  }

  const add = () => {
    dispatch(addProduct(newProduct))
  }

  return (
    <div className='addproduct'>
    <>
     
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </>           
     <h1>passez votre commande</h1>
<Form.Group>

<Form.Label> votre Nom</Form.Label>
<Form.Control name='name' type='text' onChange={handleChange}></Form.Control>

<Form.Label> votre  spectacle  </Form.Label>
<Form.Control name='description' type='text' onChange={handleChange}></Form.Control>

<Form.Label>Numero  chaise </Form.Label>
<Form.Control name='price' type='number' onChange={handleChange}></Form.Control>

<Link to='/products'>
<Button  variant="outline-success" onClick={()=> add()}>Booking</Button>
</Link>

</Form.Group>
    </div>
  )
}

export default AddProduct