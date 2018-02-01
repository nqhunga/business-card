import React from 'react'
import PropTypes from 'prop-types'
import { CardDeckEx } from './Card.style';

import Card from './Card';

class CardContainer extends React.Component {
  render () {
    const {people} = this.props;

    return (
      <CardDeckEx>
        {this.props.people.map(person => (
          <Card key={person.firstName} data={person} />
        ))}
      </CardDeckEx>
    )
  }
}

export default CardContainer;
