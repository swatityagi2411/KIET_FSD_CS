import Link from "next/link";

export default function Students() {
  const students = [
    { id: "1", name: "Rahul Sharma" },
    { id: "2", name: "Ananya Gupta" },
    { id: "3", name: "Amit Verma" }
  ];

  return (
    <div>
      <h1>Students</h1>

      {students.map((s) => (
        <div key={s.id} className="card">
          <Link href={`/students/${s.id}`}>
            {s.name}
          </Link>
        </div>
      ))}
    </div>
  );
}