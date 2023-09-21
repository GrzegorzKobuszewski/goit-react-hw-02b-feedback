import { Component } from "react";
import styles from './Toogle.module.css';

class Toggle extends Component {

    state = { isOpen: true }

    toggle = () => {
        this.setState(state => ({ isOpen: !state.isOpen }));
    };

    render() {
        const { isOpen } = this.state;
        const { children } = this.props;

        return (
        <div className={styles.container}>
            <button className={styles.button} onClick={this.toggle}> {isOpen ? "Hide feedback panel" : "Show feedback panel"} </button>
            {isOpen && children}
        </div>
        );
    }
}

export default Toggle

/* opcjonalnie wyżej: export class Toggle extends Component { ... */