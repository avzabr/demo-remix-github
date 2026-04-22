import { json } from "@remix-run/node";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const expr = url.searchParams.get("expr") ?? "1 + 1";
  const result = eval(expr);
  return json({ expr, result });
};

export default function AdminRun() {
  return null;
}
