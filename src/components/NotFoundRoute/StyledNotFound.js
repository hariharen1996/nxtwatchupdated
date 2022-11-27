import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-right: 0px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const NotFoundContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: Center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

export const NotFoundImage = styled.img`
  width: 400px;
  @media screen and (max-width: 560px) {
    width: 250px;
  }
`
export const NotFoundHeading = styled.h1`
  font-size: 25px;
  font-weight: 600;
  font-family: 'Roboto';
  color: ${props => props.headColor};
`
export const NotFoundText = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  text-align: center;
`
