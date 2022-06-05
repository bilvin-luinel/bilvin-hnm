import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

const Product = () => {

  const { id } = useParams();
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/bilvin-luinel/bilvin-hnm/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <Container className="product-detail-container">
      <Row>
        <Col className="product-detail-img">
          <img src={productList.img} />
        </Col>
        <Col>
          <div className="product-info">{productList.title}</div>
          <div className="product-price">\{productList.price}</div>
          <Button variant="danger" className="buy-button">구매</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Product