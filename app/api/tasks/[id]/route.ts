// app/api/tasks/[id]/route.ts

import { tasks } from "../../../lib/data";

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
   console.log("DELETE request received for task ID:", id);
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Task not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const [deleted] = tasks.splice(index, 1);

  return new Response(JSON.stringify({ success: true, deleted }), {
    headers: { "Content-Type": "application/json" },
  });
}