var inventory = [];
var product1 = {
    name: "Honda",
    model: "A1235",
    cost: 200000,
    quantity: 10
};
var product2 = {
    name: "mobilephone",
    model: "y20",
    cost: 2000,
    quantity: 10
};
var product3 = {
    name: "laptop",
    model: "corei5",
    cost: 3000,
    quantity: 15
};
inventory.push(product1, product2, product3);
console.log("Quantity of the third product (laptop):".concat(inventory[2].quantity));
var product4 = {
    name: "motorcycle",
    model: "y16",
    cost: 50000,
    quantity: 100
};
inventory.push(product4);
console.log("Update inventory:");
inventory.forEach(function (product) {
    console.log("Name:".concat(product.name, ",model:").concat(product.model, " ,cost:$").concat(product.cost, ", quantity:").concat(product.quantity));
});
