import styled, {css} from 'styled-components'

export const VideoItemsContainer = styled.div`
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

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 200px;
  min-width: 200px;
  height: 100%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const SpecificVideosContainer = styled.div``
export const VideoDetailsContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`

export const VideoFailure = styled.div`
  min-height: 100vh;
  width: 100%;
`
export const FailureImage = styled.img`
  width: 350px;
  margin-right: 50px;
  @media screen and (max-width: 576px) {
    width: 250px;
  }

  ${props =>
    props.search &&
    css`
      margin-left: 40px;
      @media screen and (max-width: 576px) {
        margin-left: 60px;
      }
    `}
`
export const FailureHeading = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin-top: 20px;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const FailureMessage = styled(FailureHeading)`
  font-size: 20px;
  color: ${props => props.paraColor};
  text-align: Center;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const FailureBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
  padding: 12px 27px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`
