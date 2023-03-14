import Student from "./Student";

export default function StudentList({ students }) {
  const StudentDetails = students.map((s, idx) => (
    <Student score={s.scores} student={s} key={idx} index={idx} />
  ));
  return <div className="StudentList">{StudentDetails}</div>;
}
