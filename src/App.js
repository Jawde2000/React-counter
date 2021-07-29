import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  
  state = { 
    counters: [
        { id: 1, value: 1000 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
  }

  constructor() {
    super();
    console.log("App - constructor");
    //this.state = this.props.something;
  }

  componentDidMount () {
    console.log('App - mounted');
  }

  handleDelete = counterID => {
    console.log("App - handle deleted");
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  }

  handleReset = () => {
    console.log("App - handle resetted");
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });

    this.setState({ counters });
  }

  handleIncrement = counter => {
    console.log("App - handle incremented");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState( { counters } );
  }

  render() { 
    console.log('App - Rendered');
    return (
    <React.Fragment>
    <NavBar
    totalCounters = { this.state.counters.filter(c => c.value > 0).length } 
    />
    <main className = "container">
      <Counters 
      counters = { this.state.counters }
      onReset = { this.handleReset }
      onIncrement = { this.handleIncrement }
      onDelete = { this.handleDelete }
      />
    </main>
    </React.Fragment>
    );
  }
}
 
export default App;
