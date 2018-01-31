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

  };

  onDelete = (thRow) => {
    this.state.peopleData.splice(thRow.index, 1);

    this.setState({
      peopleData: this.state.peopleData
    });
    console.log(this.state.peopleData);
  }

  onEdit = (newValue) => {
    this.setState({
      peopeleData: database.data.splice(newValue.index, 1, newValue)
    });

    console.log('App got edit value', newValue );
  }

  render() {
    return (
      <div className="App">

        <ListPeople dataPeople={this.state.peopleData}
          onEdit={newValue => this.onEdit(newValue)}
          onDelete={thRow => this.onDelete(thRow)}/>
        <AddNew onSubmit={newPeoples => this.onSubmit(newPeoples)} />
      </div>
    );
  }
}

export default App;
