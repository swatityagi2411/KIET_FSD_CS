import Link from "next/link";

export default function StudentDetails({ params }) {

  const students = [
    { id: "1", name: "Rahul Sharma", course: "React" },
    { id: "2", name: "Ananya Gupta", course: "Next.js" },
    { id: "3", name: "Amit Verma", course: "Node.js" }
  ];

  const student = students.find(s => s.id === params.id);

  return (
    <div>
      <h1>Student Details</h1>

      {student ? (
        <div className="card">
          <h2>{student.name}</h2>
          <p>ID: {student.id}</p>
          <p>Course: {student.course}</p>
        </div>
      ) : (
        <p>No student found</p>
      )}

      <br />
      <Link href="/students">Back</Link>
    </div>
  );
}