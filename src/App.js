import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import database from './database';
import './App.css';
import ListPeople from './container/ListPeople/ListPeople';
import AddNew from './container/AddNew/AddNew';
import CardContainer from './container/Card/CardContainer';
import Navigation from './Components/Navigation/Navigation';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      peopleData: database.data
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (newPeoples) => {
    const newArray = [].concat(this.state.peopleData);
    newArray.push(newPeoples);
    this.setState({
      peopleData: newArray
    });
    console.log(this.state.peopleData);
  };

  onDelete = (thRow) => {
    const newPeople = [].concat(this.state.peopleData);
    let index = newPeople.findIndex(x => x.firstName === thRow.firstName);
    newPeople.splice(index, 1);
    this.setState({
      peopleData: newPeople
    });

  }

  onEdit = (newValue) => {
    const newPeople = [].concat(this.state.peopleData);
    let index = newPeople.findIndex(x => x.about === newValue.about);
    newPeople.splice(index, 1, newValue);
    this.setState({
      peopleData: newPeople
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <div>
            <Route path="/" exact render={(props) => (
              <ListPeople people={this.state.peopleData}
                onSave={newValue => this.onEdit(newValue)}
                onDelete={thRow => this.onDelete(thRow)} {...props}/>
            )}/>
            <Route path="/add" render={(props) => (
              <AddNew onSubmit={newPeoples => this.onSubmit(newPeoples)} {...props}/>
            )}/>
          <Route path="/card" render={(props) => (
              <CardContainer people={this.state.peopleData} {...props}/>
            )}/>
          </div>




        </div>
      </Router>

    );
  }
}

export default App;
