
const url = "http://localhost:3030/:collection/products";

export function getTopProducts() {
    try {
        const products = fetch("http://localhost:3030/data/products")
            .then(x => x.json()).then(x => x.slice(0,3));

        return products;
    } catch (ex) {
        throw new Exception(ex);
    }
}

export function getAllProducts(){
    try {
        const products = fetch("http://localhost:3030/data/products")
            .then(x => x.json());

        return products;
    } catch (ex) {
        throw new Exception(ex);
    }
}