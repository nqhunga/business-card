import React, { Component } from 'react';
import database from './database';
import './App.css';
import ListPeople from './container/ListPeople/ListPeople';
import AddNew from './container/AddNew/AddNew';
import CardContainer from './container/Card/CardContainer';

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
    const newPeople = [].concat(this.state.peopleData);
    let index = newPeople.findIndex(x => x.firstName === thRow.firstName);
    newPeople.splice(index, 1);
    this.setState({
      peopleData: newPeople
    }, () => console.log(index));

  }

  onEdit = (newValue) => {
    const newPeople = [].concat(this.state.peopleData);
    this.setState({
      peopeleData: database.data.splice(newPeople.indexOf(newValue), 1, newValue)
    });
  }

  render() {
    return (
      <div className="App">
        <CardContainer people={this.state.peopleData} />
        <ListPeople people={this.state.peopleData}
          onSave={newValue => this.onEdit(newValue)}
          onDelete={thRow => this.onDelete(thRow)}/>
        <AddNew onSubmit={newPeoples => this.onSubmit(newPeoples)} />
      </div>
    );
  }
}

export default App;
