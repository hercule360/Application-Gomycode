import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct, editProduct } from '../../JS/Actions/ProductActions';

const ProductCard = ({product}) => {

  const [show, setShow] = useState(false);
const [id, setId]=useState(product._id);
const dispatch = useDispatch();
const navigate = useNavigate();
  const handleClose =()=> setShow(false);
  const handleShow =()=> setShow(true);
  const handleDelete =()=>{
setId(product._id)
    dispatch(deleteProduct(id));
    handleClose()
    navigate('/products');
  };
  const [ newProduct , setNewProduct] = useState({});
  const  [edit, setEdit] = useState(false); 

  const handleView = ()=> setEdit(true) ; 
  const closeView = () => setEdit(false);

  const handleEdit = ()=> {
    setId(product._id) 
    dispatch(editProduct( id , newProduct ))
      closeView() ;
    navigate('/products');
  

  };
    const handleChange =(e) =>{
    setNewProduct({...newProduct,[e.target.name]:e.target.value});
  };
  
  return (
    
    <div className='addproduct'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjf8KEchalHXDschnJIH0wZGSC9iM5BuSLZQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary" onClick={handleShow} > Supprimer  </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
           <Modal.Title>Delete</Modal.Title>
         </Modal.Header>
         <Modal.Body>delete this card ?</Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
            fermer
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            supprimer event
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Button  variant="success" onClick={handleView} >  Edit </Button>

      <Modal show={edit} onHide={handleClose}  animation={false}  >
        

        <Modal.Header closeButton>
           <Modal.Title>edit</Modal.Title>
         </Modal.Header>
         <Modal.Body> you want to edit this  card ?</Modal.Body>

         <Form.Group>

       <Form.Label >name</Form.Label>
      <Form.Control name="name" onChange={handleChange}  type="text"></Form.Control>
      <Form.Label >description</Form.Label>
      <Form.Control name="description" onChange={handleChange} type="text"></Form.Control>
      <Form.Label >price</Form.Label>
      <Form.Control name="price" onChange={handleChange} type="number"></Form.Control>

</Form.Group>
         <Modal.Footer>
           <Button variant="secondary" onClick={closeView}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
             Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Body>
    </Card>
    </div>
    
  )
}

export default ProductCard
