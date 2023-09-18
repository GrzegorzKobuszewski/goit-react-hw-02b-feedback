import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={styles.list}>
            {options.map(option => (
                <li key={option} className={styles.item}>
                    <button
                        onClick={() => onLeaveFeedback(option)}
                        className={styles.button}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};