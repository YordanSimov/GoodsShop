
const url = "http://localhost:3030/data/products";

export function getTopProducts() {
    try {
        const products = fetch(url)
            .then(x => x.json()).then(x => x.slice(0, 3));

        return products;
    } catch (ex) {
        throw new Exception(ex);
    }
}

export function getById(id) {
    try {
        const product = fetch(`${url}/${id}`)
            .then(x => x.json());

        return product;
    } catch (ex) {
        throw new Exception(ex);
    }
}

export function getAllProducts() {
    try {
        const products = fetch(url)
            .then(x => x.json());

        return products;
    } catch (ex) {
        throw new Exception(ex);
    }
}

export function addProduct(product) {
    try {
        const token = localStorage.getItem("accessToken");
        const result = fetch(url, {
            body: JSON.stringify(product),
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            method: "POST"
        });

        return result;
    } catch (ex) {
        throw new Exception(ex);
    }
}