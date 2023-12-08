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
            <div style={{ display: "flex" }}>
                {products.map(product =>
                    <Card style={{ width: '18rem', marginRight: "2em" }}>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>
                                <Link to={`/product/${product._id}`} element={<ProductDetails product={product} />}>{product.name}</Link>
                            </Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button variant="primary">Buy for {product.price} $</Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </>
    );
}