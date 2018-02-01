import React from 'react'
import PropTypes from 'prop-types'
import { CardEx, CardTitleEx, CardSubtileEx, CardSide, CardContent } from './Card.style';


class Card extends React.Component {
  render () {
    const {data} = this.props;
    return (

          <CardEx className="col-md-4">

            <CardSide>
              <CardTitleEx>{`${this.props.data.firstName} ${this.props.data.surName}`}</CardTitleEx>
              <CardContent>{this.props.data.company}</CardContent>
            </CardSide>

            <CardSide>
              <CardContent>{this.props.data.about}</CardContent>
              <CardContent>{this.props.data.company}</CardContent>
            </CardSide>

          </CardEx>

    )
  }

}

export default Card;
