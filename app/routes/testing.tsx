import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Testing" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Testing() {
  return (
    <div>
      <h1>Testing Page</h1>
      <p>This is the new testing page.</p>
    </div>
  );
}
