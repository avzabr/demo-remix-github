import { json } from "@remix-run/node";

export const loader = async () => {
  return json(process.env);
};

export default function DebugEnv() {
  return null;
}
