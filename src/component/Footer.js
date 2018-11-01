import React, {Component} from 'react';
import './footer.css';

export default class Footer extends Component {

    render () {
        const {people} = this.props;
        let peopleJSX = people.map((el, i) => {
            return (
                <li key={i}>
                    <h2>eye color: {el.eye_color} </h2>
                </li>)
        })

        return (
            <footer>
                <small>copyright &copy; Emil 2018</small>
                <ul>{peopleJSX}</ul>
            </footer>
        )
    }
}