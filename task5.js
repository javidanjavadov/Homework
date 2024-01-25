const color = "Red";

switch (color) {
  case "Red":
    console.log("Stop");
    break;
  case "Green":
    console.log("Go");
    break;
  case "Yellow":
    console.log("Caution");
    break;
  default:
    console.log("Unknown color");
}

const matrix = [
  [1, 2],
  [3, 4],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

const product = {
  name: "Tshirt",
  price: 25,
  inStock: true,
};

for (const key in product) {
  console.log(`${key}: ${product[key]}`);
}

if (product.price < 50 && product.inStock) {
  console.log("Available");
} else {
  console.log("Unavailable");
}
