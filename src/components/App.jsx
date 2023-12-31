import React, { Component } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import Toggle from './Toogle/Toggle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


/* Zamieniłem tę funkcję na handleFeedback, ponieważ gdyby tych buttonów było więcej nawet 10, 
to musiałbym rozpisywac 10 razy tyle przypadków. Można więc napisać to prościej z wykorzystaniem 
faktu, że nazwa argumentu jest taka sama jak nazwa stanu - zmiana po uwadze mentora ;) */
  
/*  
  fooOnLeaveFeedback = feedbackOpt => {
    switch (feedbackOpt) {
      case 'good':
        this.setState(state => ({ good: state.good + 1 }));
        break;
      case 'neutral':
        this.setState(state => ({ neutral: state.neutral + 1 }));
        break;
      case 'bad':
        this.setState(state => ({ bad: state.bad + 1 }));
        break;
      default:
        return 0;
    }
  };
*/

  handleFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
    /* lub po prostu: return this.state.good + this.state.neutral + this.state.bad; */
    
  };

  countPositiveFeedbackPercentage = () => {
    let percentage = ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
    if (isNaN(percentage)) {
      return 0;
    } else return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          maxWidth: '400px',
          margin: '0 auto',
          flexDirection: 'column',
          fontSize: 20,
          color: '#010101',
          padding: '20px 10px',
        }}
      >
        <Toggle>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>

          <Section title="Statistics">
            {this.countTotalFeedback() < 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </Toggle>
      </div>
    );
  }
}