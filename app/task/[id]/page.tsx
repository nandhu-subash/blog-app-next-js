import Link from "next/link";

async function getTasks() {
  const res = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });

  return res.json();
}

export default async function TaskDetails({
  params,
}: {
  params: { id: string };
}) {
    const { id } = await params;
  const tasks = await getTasks();
  const task = tasks.find((t: { id: string; title: string; status: string }) => t.id === id);
  if (!task) return <div>Task not found</div>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>Status: {task.status}</p>

      <Link href="/">⬅ Back</Link>
    </div>
  );
}