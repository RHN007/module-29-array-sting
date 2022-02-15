const products = [
    "dell hardcore I29 200GB Laptop",
    "iphone 1TB camera flashlight phone",
    " Dell yellow laptop with black camera",
    "LG supernova laptop",
    "htc low price phone",
    "Dell purple color phone with laptop",
];

const searching = "dell";

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLocaleLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
console.log(output);

//Stats with

for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);