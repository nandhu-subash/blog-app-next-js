"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // DELETE task
  const deleteTask = async (id: string) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const text = await res.text();
        console.error("Failed to delete task:", res.status, text);
        return;
      }
      fetchTasks(); // refresh UI
    } catch (err) {
      console.error("Delete request failed:", err);
    }
  };

  return (
    <div>
      <h1>Tasks</h1>

      {tasks.map((task: { id: string; title: string; status: string }) => (
        <div
          key={task.id}
          style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "8px" }}
        >
          <Link href={`/task/${task.id}`}>
            <b>{task.title}</b>
          </Link>

          <p>Status: {task.status}</p>

         
          {/* DELETE */}
          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}