import React from 'react'
import { CardDeckEx } from './Card.style';

import Card from './Card';

class CardContainer extends React.Component {
  render () {
    const {people} = this.props;

    return (
      <CardDeckEx>
        {this.props.people.map(person => (
          <Card key={person.email} data={person} />
        ))}
      </CardDeckEx>
    )
  }
}

export default CardContainer;
