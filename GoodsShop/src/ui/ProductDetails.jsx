import React, { useContext } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../connections/productsConnection";
import AuthContext from "../context/authContext";
import EditProduct from "./EditProduct";

export function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { username } = useContext(AuthContext);

    useEffect(() => {
        const fetchProductById = async () => {
            const result = await getById(id);
            setProduct(result);
        }

        if(id){
            fetchProductById();
        }
    }, [id])

    return (
        <>
            <Container className="mt-3">
                <Row className="mb-3">
                    <Col md={10}>
                        {username === "Admin" &&
                            <>
                                <Button style={{ marginRight: "1em" }} variant="primary">
                                    <Link className="text-white" to={`/product/edit/${product._id}`} element={<EditProduct />}>Edit</Link>
                                </Button>
                                <Button variant="danger">Delete</Button>
                            </>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <img src={product.img} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
                    </Col>
                    <Col md={6}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <Button variant="primary">Buy Now</Button>
                    </Col>
                </Row>
            </Container>

        </>
    );
}