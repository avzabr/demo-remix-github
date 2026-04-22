import { useLoaderData } from "@remix-run/react";
import { products } from "../lib/sampleData.js";

export const meta = () => [{ title: "demo-remix" }];

export const loader = async () => {
  return { products };
};

export default function Index() {
  const { products } = useLoaderData();
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>demo-remix</h1>
      <p>Sample products:</p>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — ${p.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </main>
  );
}
