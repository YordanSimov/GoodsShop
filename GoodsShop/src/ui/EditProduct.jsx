import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct, getById } from '../connections/productsConnection';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [editedProduct, setProduct] = useState({});

    useEffect(() => {
        const fetchProductById = async () => {
            const result = await getById(id);
            setProduct(result);
        }

        if (id) {
            fetchProductById();
        }
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...editedProduct, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await editProduct(editedProduct);
        navigate(`/product/${editedProduct._id}`);
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Change product name"
                        name="name"
                        value={editedProduct.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="productImg">
                    <Form.Label>Product Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Change image URL"
                        name="img"
                        value={editedProduct.img}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="productDescription">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Change product description"
                        name="description"
                        value={editedProduct.description}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="productPrice">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Change product price"
                        name="price"
                        value={editedProduct.price}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Edit Product</Button>
            </Form>
        </div>
    );
};

export default EditProduct;