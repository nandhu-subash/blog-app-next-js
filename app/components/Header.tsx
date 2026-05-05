import Link from "next/link";

export default function Header() {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <Link href="/">Home</Link>
      <Link href="/add-task">Add Task</Link>
    </div>
  );
}