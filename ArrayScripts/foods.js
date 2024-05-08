let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

function calculateSubtotal(items) {
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        subtotal += items[i].price;
    }
    return subtotal;
}
const TAX_RATE = 0.08;
const TIP_RATE = 0.18;

let subtotal = calculateSubtotal(lunch);
let tax = subtotal * TAX_RATE;
let tip = subtotal * TIP_RATE;
let totalDue = subtotal + tax + tip;

console.log("Total Due: $", totalDue.toFixed(2));