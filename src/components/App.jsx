import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [values, setValues] = useState(() => {
    const savedReviews = window.localStorage.getItem('number-of-reviews');
    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('number-of-reviews', JSON.stringify(values));
  }, [values]);

  const onLeaveFeedback = option => {
    setValues({
      ...values,
      [option]: values[option] + 1,
    });
  };

  let isHidden = true;
  if (values.good || values.neutral || values.bad) {
    isHidden = false;
  }

  const onReset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        onUpdate={onLeaveFeedback}
        isHidden={isHidden}
        onReset={onReset}
      />
      {isHidden ? <Notification /> : <Feedback values={values} />}
    </>
  );
};
