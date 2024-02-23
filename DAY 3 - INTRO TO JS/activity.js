let shirt = 17;
let shoes = 65;
let pants = 49;
let sunglasses = 13;

let total = 2 * shirt + 1 * shoes + 1 * pants + 3 * sunglasses;
let cart = total - total * 0.1;

console.log ("Total: $", cart);

//Another option:

cart += shirt * 2
cart += shoes
cart += pants
cart += sunglasses * 3

console.log ("Total: $", cart);

let discount = cart * 0.10
cart -= cart
console.log ("Total: $", cart);