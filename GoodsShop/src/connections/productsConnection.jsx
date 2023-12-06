
const url = "http://localhost:3030/:collection/products";

export default function getTopProducts() {
    try {
        const products = fetch("http://localhost:3030/data/products")
            .then(x => x.json());

        return products;
    } catch (ex) {
        throw new Exception(ex);
    }
}