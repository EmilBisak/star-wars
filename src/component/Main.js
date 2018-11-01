import React, { Component } from 'react';
import './main.css';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [],
            counter : 0
        }
      }

    componentWillReceiveProps(nextProps) {
        console.log("NextProps",nextProps.people.length);
        console.log("Props",this.props.people.length);
        
        
        if (nextProps.people.length !== this.props.people.length) {
            const { people } = nextProps;
            this.setState({ people });
            // this.setState({counter: 1})
            console.log(people);
            
            
        }

        // console.log("State MAIN", this.state);


    }

    render() {
        const { people } = this.state;
        // console.log("PROPS MAIN", this.props);
        console.log("State MAIN", this.state);

        let peopleJSX = people.map((el, i) => {
            return (
                <div 
                    key={i}
                    className="flex-item"
                    style={{
                        background: el.eye_color, 
                        display: "inline-block",
                        height: 2*el.height+"px",
                        border: "1px solid black",
                        borderBottom: el.mass+"px solid black",
                    }}
                >
                    <h2>{el.name} </h2>
                    <p>eye color: {el.eye_color} </p>
                    <p>height: {el.height} </p>
                    <p>hair color: {el.hair_color} </p>
                    <p>mass: {el.mass} </p>
                </div>)
        })

        return (
            <div>
                <input type="text" placeholder="Search" style={{ width: "50%", margin: "0 auto", display: "table" }} />

                <div className="flex-wrapper">
                    {peopleJSX}
                </div>
            </div>
        )
    }

}
export default Main