import styled from 'styled-components'

export const GamingContainer = styled.div`
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
export const GamingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

export const GamingItems = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
  gap: 15px;
`
export const GamingVdData = styled.div``
export const GamingVdHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: ${props => props.headerBg};
  width: 100%;
  padding: 15px;
  margin-top: 0px;
`
export const GamingVdLogo = styled.div`
  background-color: ${props => props.radiusBg};
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`
export const GamingVdText = styled.h1`
  font-size: 25px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
