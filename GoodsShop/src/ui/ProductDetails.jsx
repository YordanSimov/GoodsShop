import React, { useContext } from "react";
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { useParams, Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById, deleteProduct } from "../connections/productsConnection";
import AuthContext from "../context/authContext";
import EditProduct from "./EditProduct";

export function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const { username } = useContext(AuthContext);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const openDeleteDialog = () => setShowDeleteDialog(true);
    const closeDeleteDialog = () => setShowDeleteDialog(false);

    const handleDelete = () => {
        deleteProduct(id);
        navigate("/products")
    };

    useEffect(() => {
        const fetchProductById = async () => {
            const result = await getById(id);
            setProduct(result);
        }

        if (id) {
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
                                <Button onClick={openDeleteDialog} variant="danger">Delete</Button>
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
            <DeleteDialog
                onDelete={handleDelete}
                onClose={closeDeleteDialog}
                show={showDeleteDialog}
            />
        </>
    );
}

const DeleteDialog = ({ onDelete, onClose, show }) => {
    const handleDelete = () => {
        onDelete();
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};