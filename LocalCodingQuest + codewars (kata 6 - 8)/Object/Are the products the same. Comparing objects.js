
function isContainsDuplicate(product1, product2, product3){
    if (product1['sku'] === product2['sku'] && product1['code'] === product2['code']){
        return true;
    }
    if (product1['sku'] === product3['sku'] && product1['code'] === product3['code']){
        return true;
    }
    if (product2['sku'] === product3['sku'] && product2['code'] === product3['code']){
        return true;
    }
    return false;
}