import React,{useContext} from 'react'
import { Container,Navbar,Nav,Form,Button } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import './navbar.css'
import { useSelector } from 'react-redux'
import { AppContext } from '../../App'


export default function Navbarr() {
  const {loginbtn,setLoginbtn} = useContext(AppContext)
  const cartProduct = useSelector(state=>state.cart)
  // console.log(cartProduct);
  const navigate = useNavigate()
  function clkLogin(){
    console.log(loginbtn);
    if(localStorage.getItem("login")==200){
      localStorage.clear()
      setLoginbtn("Login")
    navigate('/login')
    }else{
      navigate('/login')
    }
  }
  
  return (
    <Navbar bg="light" expand="lg">
     
    <Container fluid>
      <Navbar.Brand as={Link} to='/'>My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {localStorage.getItem("login")==200? <Nav.Link as={Link} to='/home' >Home</Nav.Link>:<Nav.Link as={Link} to='/login'>Login</Nav.Link>
          }
         
          
          <Nav.Link disabled>
            Link
          </Nav.Link>
        </Nav>
        <div className='cart'>
         {localStorage.getItem("login")==200? 
        <Nav.Link as={Link} to='/cart'>Cart {cartProduct.length}</Nav.Link>:null 
          } 
        
          <Button variant="outline-success" onClick={clkLogin}>{loginbtn} </Button>
        </div>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
