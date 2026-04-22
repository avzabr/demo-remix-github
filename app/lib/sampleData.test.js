import { products, totalPrice, findProduct } from "./sampleData.js";

describe("sampleData", () => {
  test("exposes three products", () => {
    expect(products).toHaveLength(3);
  });

  test("totalPrice sums item prices", () => {
    expect(totalPrice(products)).toBeCloseTo(45.74);
  });

  test("findProduct returns the matching product", () => {
    expect(findProduct(1)).toEqual({ id: 1, name: "Notebook", price: 4.5 });
  });

  test("findProduct returns null when not found", () => {
    expect(findProduct(999)).toBeNull();
  });
});
