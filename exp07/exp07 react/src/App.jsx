import Student from "./Student";

function App() {
  const students = [
    { id: 1, name: "Rahul Sharma", course: "Computer Science", marks: 85 },
    { id: 2, name: "Anita Verma", course: "Information Technology", marks: 92 },
    { id: 3, name: "Rohan Gupta", course: "Electronics", marks: 78 }
  ];

  return (
    <div className="app-container">
      <h2>Student Information</h2>
      {students.map(student => (
        <Student key={student.id} {...student} />
      ))}
    </div>
  );
}

export default App;