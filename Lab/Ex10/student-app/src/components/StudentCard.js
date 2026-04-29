function StudentCard(props) {
  return (
    <div>
      <img src={props.image} alt="Student" width="100%" />
      <h3>{props.name}</h3>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default StudentCard;