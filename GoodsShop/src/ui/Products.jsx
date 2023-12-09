import { getAllProducts } from "../connections/productsConnection";
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ProductDetails } from "./ProductDetails";
import { Link } from 'react-router-dom';

export function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            setProducts(products);
        };

        fetchProducts();
    }, []);


    return (
        <>
            <h3 className="mb-5">Available products</h3>
            <div style={{ display: "flex" }}>
                {products.map(product =>
                    <Card style={{ width: '18rem', marginRight: "2em" }} key={product._id}>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>
                                <Link to={`/product/${product._id}`} element={<ProductDetails product={product} />}>{product.name}</Link>
                            </Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Button variant="primary">
                                <Link className="text-white" to={`/product/${product._id}`} element={<ProductDetails product={product} />}> Buy for {product.price} $</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </>
    );
}