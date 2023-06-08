import axios from "axios";
import { addCart } from "../../Redux/cartSlice";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./home.css";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";




export default function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((res) => {
      setProduct(res.data);
      console.log(res.data);
    })
    .catch((err)=>navigate('/error'))
  }, []);
  function addToCart(product) {
    if (!cartProducts.length) {
      dispatch(addCart(product));
    } else {
      const exist = cartProducts.filter((exist, i) => exist.id == product.id);
      if (!exist.length) {
        dispatch(addCart(product));
      }
    }
  }

  return (
    <>
        <Nav.Link as={Link} to="/">
          <Row xs={1} md={4} className="g-4">
            {product.map((item) => (
              <Col key={item.id}>
                <Card style={{ height: "40vh" }}>
                  <div className="text-center">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{ height: "10vh", width: "6vh" }}
                    />
                    <Card.Body style={{ alignItems: "center" }}>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description.slice(0, 50)}</Card.Text>
                      <Card.Text className="fw-bold">$ {item.price}</Card.Text>
                    </Card.Body>
                    <div className="footer2">
                      <Button variant="primary" onClick={() => addToCart(item)}>
                        Add to cart
                      </Button>
                    </div>
                    <div className="footer1">
                      <Button variant="secondary">Add to Fav</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Nav.Link>
     
    </>
  );
}
