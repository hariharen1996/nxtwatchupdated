import styled from 'styled-components'

export const SavedVdContainer = styled.div`
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
export const SavedVdContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center
  align-items: center;
  width: 100%;
`

export const SavedVdHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: ${props => props.headerBg};
  width: 100%;
  padding: 15px;
  margin-top: 0px;
`
export const SavedVdLogo = styled.div`
  background-color: ${props => props.radiusBg};
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`
export const SavedVdText = styled.h1`
  font-size: 25px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const SavedVdData = styled.ul`
  padding-left: 0;
  align-self: flex-start;
  margin-left: 15px;
  margin-right: 15px;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding-bottom: 15px;
  @media screen and (max-width: 768px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`
export const NoVideosHeading = styled.h1`
  font-size: 25px;
  font-weight: 600;
  font-family: 'Roboto';
  color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const NoVideosImage = styled.img`
  width: 350px;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
export const NoVideosText = styled.p`
  font-size: 23px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.textColor};
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const NoVideos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
