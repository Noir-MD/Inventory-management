
import type { Route } from "./+types/home";

export function Dashboard() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-muted">Overview and quick actions.</p>
    </main>
  );
}

export default Dashboard;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Dashboard overview" },
  ];
}

