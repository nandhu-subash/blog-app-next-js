import { tasks } from "../../lib/data";

export async function GET() {
  return new Response(JSON.stringify(tasks), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const { title } = await request.json();
  const newTask = { id: String(tasks.length + 1), title, status: "pending" };
  tasks.push(newTask);
  return new Response(JSON.stringify(newTask), {
    headers: { "Content-Type": "application/json" },
  });
}
