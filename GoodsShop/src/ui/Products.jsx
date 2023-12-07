import { getAllProducts } from "../connections/productsConnection";
import ProductDetails from "./ProductDetails";


export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            setProducts(products);
        };

        fetchProducts();
    }, []);


    return (
      <div style={{display: "flex"}}>
        {products.map(product => 
                <ProductDetails props={product} />
            )}
      </div>  
    );
}