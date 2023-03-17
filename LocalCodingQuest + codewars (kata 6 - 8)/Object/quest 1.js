const comparePizza = (obj1, obj2) => {
    const calcCostsPizza1 = () => obj1['diameter'] / obj1['price'];
    const calcCostsPizza2 = () => obj2['diameter'] / obj2['price'];
    if (calcCostsPizza1() > calcCostsPizza2()) {
        return `${obj1['name']} is the better deal`;
    }
    if (calcCostsPizza2() > calcCostsPizza1()) {
        return `${obj2['name']} is the better deal`;
    }
    return 'Both pizzas have the same price per square inch'
}