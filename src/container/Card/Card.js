import React from 'react'
import PropTypes from 'prop-types'
import { CardEx, CardTitleEx, CardSubtileEx, CardSide, CardContent } from './Card.style';


class Card extends React.Component {
  render () {
    const {data} = this.props;
    return (

          <CardEx className="col-md-4">

            <CardSide>
              <CardTitleEx><span>{
                    (this.props.data.gender) === "male" ? "Mr " : "Mrs "
                }</span>{`${this.props.data.firstName} ${this.props.data.surName}`}</CardTitleEx>
              <CardContent>{this.props.data.company}</CardContent>
              <CardContent>{this.props.data.phone}</CardContent>
              <CardContent>{this.props.data.email}</CardContent>
              <CardContent>
                {(this.props.data.address === undefined ?
                  `${this.props.data.street} ${this.props.data.state} ${this.props.data.city}` :
                  this.props.data.address
                )}
              </CardContent>
            </CardSide>

            <CardSide>
              <CardContent>{this.props.data.about}</CardContent>
              <CardContent>{
                  this.props.data.tags.map((tag, index) => (
                    <span key={index}>{tag} </span>
                  ))
                }</CardContent>
            </CardSide>

          </CardEx>

    )
  }

}

export default Card;
