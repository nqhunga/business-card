import React, { Component } from 'react';
import database from './database';
import './App.css';
import ListPeople from './container/ListPeople/ListPeople';
import AddNew from './container/AddNew/AddNew';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      peopleData: database.data
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (newPeoples) => {

    this.setState({
      peopleData: database.data.push(newPeoples)
    });

    console.log('App got', newPeoples);
    console.log(database.data);
  };

  render() {
    return (
      <div className="App">

        <ListPeople dataPeople={this.state.peopleData}/>
        <AddNew onSubmit={newPeoples => this.onSubmit(newPeoples)} />
      </div>
    );
  }
}

export default App;
