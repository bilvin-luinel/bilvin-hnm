import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const Home = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/bilvin-luinel/bilvin-hnm/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, [query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item)=>(<Col lg={3}><ProductCard item={item}/></Col>))}
          
        </Row>
      </Container>
    </div>


  )

}

export default Home;