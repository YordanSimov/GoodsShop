import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getTopProducts } from '../connections/productsConnection';
import { Link } from 'react-router-dom';
import { ProductDetails } from './ProductDetails';

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
            <h3 style={{ color: 'white', paddingBottom: 15 }}>Our most popular products</h3>
            <div style={{ display: 'flex' }}>
                {topProducts.map((product) =>
                    <Card style={{ width: '18rem', marginRight: "2em" }} key={product.name + product.price}>
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