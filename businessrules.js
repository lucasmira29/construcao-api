import { data, updateData } from './dataHandler.js'


function addProduct(name, price) {

    data.products = data.products || [];

    const lastProduct = data.products.length > 0 ? data.products[data.products.length - 1] : { id: 0 };


    const newProduct = {
        id: lastProduct.id + 1,
        name,
        price,
    } 

    
    data.products.push(newProduct);

    updateData(data);
    
}


function readProduct() {
    return data;
}

function readProductById(id) {
    
    const product = data.products.find((item) => item.id === id);
 
    if (product) {
        return product;
    }
}

function updateProduct(id, updatedProduct) {
    const index = data.products.findIndex((item) => item.id === id);

    if(id, updatedProduct) {
        data.products[index] = {id: data.products[index].id, ...updatedProduct}
        
        updateData(data)
    } 
    
    return data;
}

function deleteProduct(id) {
    const product = data.products.find((item) => item.id === id);

    if (product) {
        data.products = data.products.filter((item) => item.id !== id)
        updateData(data);
        return data;
    }

}


export { readProduct, readProductById, addProduct, updateProduct, deleteProduct }