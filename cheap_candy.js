let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 }]

let candyprices = [];
for (let product of products) {
    if (product.price <= 4) {
        candyprices.push(product.price);
    }
}
console.log("Candy prices:", candyprices);

let MandM = [];
for (let product of products) {
    if (product.product === "Plain M&Ms" || product.product === "Peanut M&Ms") {
        MandM.push(product.product);
    }
}
console.log("M&Ms:", MandM);

let SwedishFish = [];
for (let product of products) {
    if (product.product === "Swedish Fish") {
        SwedishFish.push(product);

    }
}
    console.log("we have Swedish Fish?", SwedishFish);