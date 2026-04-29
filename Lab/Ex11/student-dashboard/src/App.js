import { useState } from "react";
import StudentCard from "./StudentCard";

function App() {

  const [students] = useState([
    {
      name: "Anuja Khandale",
      course: "B.Tech CSE (AI & ML)",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Rahul Patil",
      course: "B.Tech IT",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Sneha Sharma",
      course: "B.Tech CSE",
      image: "https://via.placeholder.com/150"
    }
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Dashboard</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            course={student.course}
            image={student.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;