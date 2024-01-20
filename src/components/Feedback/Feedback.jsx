import css from './Feedback.module.css';

export const Feedback = ({ values: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <ul>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.itemColor}>Total: {totalFeedback}</li>
      <li className={css.itemColor}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};
