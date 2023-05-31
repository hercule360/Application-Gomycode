import React from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


const ErrorPage = () => {
  return (
    <div> <ToastContainer className="position-static">
    <Toast>
      <Toast.Header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPESKch0YwdKYXEs7r1Bv_NqR9KBOM0AZhq4FQKeppSNc1x7UhkgHXi6TRB28sfOVrau0&usqp=CAU" className="rounded me-2" alt="" />
       
      </Toast.Header>
      <Toast.Body>  ALERT PAGE </Toast.Body>
    </Toast>
    <Toast>
      <Toast.Header>
        <strong className="me-auto">error page </strong>
        <small className="text-muted">5 seconds ago</small>
      </Toast.Header>
      <Toast.Body> AMAR 404  </Toast.Body>
    </Toast>
  </ToastContainer>
  <>
      {[
        
        'Danger',
       
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Back  </strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
         where are you doing Man this GOmycode 
          </Toast.Body>
        </Toast>
      ))}
    </>
  </div>
  )
}


export default ErrorPage
