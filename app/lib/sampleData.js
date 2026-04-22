export const products = [
  { id: 1, name: "Notebook", price: 4.5 },
  { id: 2, name: "Pen", price: 1.25 },
  { id: 3, name: "Backpack", price: 39.99 },
];

export function totalPrice(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

export function findProduct(id) {
  return products.find((p) => p.id === id) ?? null;
}
