function copyProduct(product){
    const newProduct = JSON.parse(JSON.stringify(product));
    return newProduct;
};

function copyProduct1(product){
    const newProduct = {};
    newProduct.name = product.name;
    newProduct.price = product.price;
    newProduct.sku = product.sku;
    newProduct.code = product.code;
    return newProduct;
}

function swapProductSku(product1, product2){
    const sku1 = product1['sku'];
    product1['sku'] = product2['sku'];
    product2['sku'] = sku1;
}

function mergeObjects(productSpecs, productInfo, productPrice){
    const productTotal = {};
    productTotal.name = productSpecs.name;
    productTotal.sku = productSpecs.sku;
    productTotal.description = productInfo.description;
    productTotal.manufacturer = productInfo.manufacturer;
    productTotal.price = productPrice.price;
    productTotal.currency = productPrice.currency;
    return productTotal;
}