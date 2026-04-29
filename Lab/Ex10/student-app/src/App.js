import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div>
      <h1>Student Information</h1>
      <StudentCard 
        name="Anuja Khandale" 
        course="B.Tech CSE (AI & ML)" 
        image="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;