import React from 'react'
import { useSelector } from 'react-redux'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import  {removeCart} from '../../Redux/cartSlice'

export default function Cart() {
  const dispatch = useDispatch()
  const cartProduct = useSelector(state=>state.cart)
  console.log(cartProduct);

  function removeItem(product){
dispatch(removeCart(product.id))
  }
  
  return (
   <>
   <h3>Cart</h3>
   
   <Row xs={1} md={4} className="g-4">
      {cartProduct.map((item) => (
        <Col key={item.id}>
          <Card style={{height:"40vh"}}>
              <div className='text-center'>
            <Card.Img variant="top" src={item.image} style={{height:"10vh",width:"6vh"}}/>
            <Card.Body style={{alignItems:'center'}}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description.slice(0,50)}
              </Card.Text>
              <Card.Text className='fw-bold'>$ {item.price}</Card.Text>
            </Card.Body>
              <div className='footer'>
                <Button variant='primary' >Buy</Button>
                </div>
                <div className='footer1'>
                <Button variant='danger' onClick={()=>removeItem(item)}>Remove</Button>
                </div>
              </div>
          </Card>
        </Col>
      ))}
    </Row>
    
   
   </>
  )
}
