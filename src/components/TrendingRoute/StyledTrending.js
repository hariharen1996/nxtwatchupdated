import styled from 'styled-components'

export const TrendingContainer = styled.div`
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
export const TrLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const TrendingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TrendingItems = styled.ul`
  padding-left: 0px;
  align-self: center;
  margin-left: 15px;
  margin-right: 15px;
`
export const TrendingVdData = styled.div``
export const TrendingVdHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: ${props => props.headerBg};
  width: 100%;
  padding: 15px;
  margin-top: 0px;
`
export const TrendingVdLogo = styled.div`
  background-color: ${props => props.radiusBg};
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`
export const TrendingVdText = styled.h1`
  font-size: 25px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
