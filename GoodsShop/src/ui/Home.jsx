import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import getTopProducts from '../connections/productsConnection';

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
            <div style={{ top: "0px", position: 'fixed', width: "100%" }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">GoodsShop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <h3 style={{ color: 'white', paddingBottom: 15 }}>Our most popular products</h3>
            <div style={{ display: 'flex' }}>
            {topProducts.map((x) =>
                    <div className="card" style={{ width: "18rem", marginRight: "10px" }}>
                        <img className="card-img-top" src={x.img} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{x.name}</h5>
                            <p className="card-text">{x.description}</p>
                            <a href="#" className="btn btn-primary">Buy for {x.price} $</a>
                        </div>
                    </div>
            )}
            </div>
        </>
    );
}