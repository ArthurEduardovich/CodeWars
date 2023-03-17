const totalProductPrice = (obj1, obj2, obj3, obj4) => {
    const totalPrice1 = (obj1['price'] * obj1['quantity']) * ((100 - obj1['discount']) / 100);
    const totalPrice2 = (obj2['price'] * obj2['quantity']) * ((100 - obj2['discount']) / 100);
    const totalPrice3 = (obj3['price'] * obj3['quantity']) * ((100 - obj3['discount']) / 100);
    const totalPrice4 = (obj4['price'] * obj4['quantity']) * ((100 - obj4['discount']) / 100);
    return `Total price is $${totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4}`;
}