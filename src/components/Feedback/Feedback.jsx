// import css from "./Feedback.module.css"

export const Feedback = ({ values: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};
