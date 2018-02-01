import styled from 'styled-components';
import { Card, CardTitle, CardText, CardSubtitle, CardColumns } from 'reactstrap';
import FlipCard from 'react-flipcard-2';

export const CardEx = styled(FlipCard)`
  display: flex;
  flex: 1 0 24%;
  float: left;
  height: 100vh;
  margin: 20px;
  width: 33%;

`;

export const CardTitleEx = styled(CardTitle)`

`;

export const CardSubtileEx = styled(CardSubtitle)`

`;

export const CardDeckEx = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  position: relative;
  margin-bottom: 20px;
`;

export const CardSide = styled(Card)`
  width: 450px;
  height: 300px;
`;

export const CardContent = styled(CardText)`

`;
