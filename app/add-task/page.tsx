"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTaskPage() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
    });

    setTitle("");

    // 🔥 redirect to home
    router.push("/");
  };

  return (
    <div>
      <h1>Add Task</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task name"
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}