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
    // const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
// setGood(Math.round((good / this.countTotalFeedback()) * 100))
    // const { good } = this.state;
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
    // this.setState(prevState => {
    //   return { [currentBtn]: prevState[currentBtn] + 1 };
    // });
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

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

  // countTotalFeedback = () => {
  //   const { good, bad, neutral } = this.state;
  //   return good + bad + neutral;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   return Math.round((good / this.countTotalFeedback()) * 100);
  // };

  // onLeaveFeedback = e => {
  //   const currentBtn = e.currentTarget.name;
  //   this.setState(prevState => {
  //     return { [currentBtn]: prevState[currentBtn] + 1 };
  //   });
  // };

//   render() {
//     const options = Object.keys(this.state);
//     return (
//       <section className={styles.sectionMain}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               countTotalFeedback={this.countTotalFeedback}
//               countPositiveFeedbackPercentage={
//                 this.countPositiveFeedbackPercentage
//               }
//             />
//           )}
//         </Section>
//       </section>
//     );
//   }
// }
