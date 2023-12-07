import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Nav, Navbar, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import {getTopProducts} from '../connections/productsConnection';

export default function Home() {

    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getTopProducts();
            setTopProducts(products);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Navbar expand="lg" style={{top: "0px", position: 'fixed', width: "100%"}} className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">GoodsShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Products">Products</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h3 style={{ color: 'white', paddingBottom: 15 }}>Our most popular products</h3>
            <div style={{ display: 'flex' }}>
                {topProducts.map((x) =>
                    <Card style={{ width: '18rem', marginRight: "2em" }} key={x.name + x.price}>
                        <Card.Img variant="top" src={x.img} />
                        <Card.Body>
                            <Card.Title>{x.name}</Card.Title>
                            <Card.Text>
                                {x.description}
                            </Card.Text>
                            <Button variant="primary">Buy for {x.price} $</Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </>
    );
}