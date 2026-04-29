function StudentCard({ name, course, image }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      width: "200px",
      textAlign: "center",
      margin: "10px"
    }}>
      <img src={image} alt="Student" width="100%" />
      <h3>{name}</h3>
      <p>{course}</p>
    </div>
  );
}

export default StudentCard;