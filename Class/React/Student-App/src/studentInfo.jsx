function StudentInfo(props){
    const name = 'Anuja';

    return(
        <>
            <h1>{props.fname}</h1>
            <h1>{props.age}</h1>
            <h1>{props.course}</h1>
        </>
    )
}

export default StudentInfo;