import Score from "./Score";

export default function Student({ student, index, score }) {
  const ScoreList = score.map((s, idx) => (
    <Score score={s} key={idx} index={idx} />
  ));
  return (
    <div className="Student">
      <h4>Name: {student.name}</h4>
      <p>Bio: {student.bio}</p>
      <div className="ScoreList">{ScoreList}</div>
    </div>
  );
}
