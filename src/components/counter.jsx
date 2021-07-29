import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     tags: ["Egg", "Chicken", "Milk"]
    // };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // styles = {
    //     fontSize: 50,
    //     fontWeight: "bold"
    // }

    // handleIncrement = product => {
    //     this.setState( {value : this.state.value + 1} )
    // }

    componentDidUpdate (prevProps, prevState) {
        console.log("prevProps",prevProps);
        console.log("prevState", prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //
        }
    }

    componentWillUnmount () {
        console.log("counter - unmounted");
    }

    render() {
        console.log('counter - Rendered');

        return (
        <div>
        <span className = {this.getbadgeClasses()}>
            {this.formatcount()}
        </span>
        <button 
        onClick = { () => this.props.onIncrement(this.props.counter)} 
        className = "btn btn-secondary btn-sm">Increment
        </button>
        <button 
        onClick = { () => this.props.onDelete(this.props.counter.id) } 
        className = "btn btn-danger btm-sm m-2">Delete
        </button>
        {<ul>
           
        </ul>}
        </div>);
    }

    getbadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatcount() {
        const { value } = this.props.counter;
        const x = "Zero"
        return value === 0 ? x : value;
    }
}
export default Counter;