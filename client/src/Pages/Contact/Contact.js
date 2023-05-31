import React from 'react'
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';
import { Button } from 'react-bootstrap';


const Contact = () => {
  return (
    <div> <div>
    <Toast>
   
   <Toast.Header>
     <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
     <strong className="me-auto">Contactez nous </strong>
     <small>10mins ago</small>
   </Toast.Header>
   <Toast.Body>Envoyer votre message </Toast.Body>
 </Toast>
 <h1>Réserver votre place par message <Badge bg="warning">Booking </Badge>   </h1>

 <div className='contact'>
 <Form>
   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Email </Form.Label>
     <Form.Control type="email" placeholder="" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
     <Form.Label>Message</Form.Label>
     <Form.Control as="textarea" rows={3} />
   </Form.Group>
   <Form.Label>spectacle </Form.Label>
   <Form.Range />  Staisfaction     </Form>
   <Button variant="outline-warning"  href="https://www.teskerti.tn/contact/" > CONTACTER NOUS </Button>


    
 </div>
 <Figure>
   <Figure.Image
     width={171}
     height={180}
     alt="171x180"
     src="https://www.espacemanager.com/sites/default/files/field/image/pathee.jpg"
   />
   <Figure.Caption>
     Notre salle de cinema  
   </Figure.Caption>
 </Figure>

 </div>
 
</div>
  )
}

export default Contact