export default function Score({ score, index }) {
  return (
    <div className="Score">
      <ul>
        <li className="ScoreList">
          {score.date} Score: {score.score}{" "}
        </li>
      </ul>
    </div>
  );
}
