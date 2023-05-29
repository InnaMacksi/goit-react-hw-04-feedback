import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import styles from './app.module.css';
import React from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = e => {
    const currentBtn = e.currentTarget.name;
if (currentBtn === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (currentBtn === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (currentBtn === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

    const options = ['good', 'bad', 'neutral'];

  return (
      <section className={styles.sectionMain}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={countTotalFeedback}
              countPositiveFeedbackPercentage={
                countPositiveFeedbackPercentage
              }
            />
          )}
        </Section>
      </section>
    );
};
export default App;
