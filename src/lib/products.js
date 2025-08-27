let products = [
  { id: 1, name: "Laptop", description: "High performance laptop", price: 1200 },
  { id: 2, name: "Phone", description: "Latest smartphone", price: 800 },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((p) => p.id === Number(id));
}

export function addProduct(product) {
  const newProduct = { id: Date.now(), ...product };
  products.push(newProduct);
  return newProduct;
}
