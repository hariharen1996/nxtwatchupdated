import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLists = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`

export const VideoImage = styled.img`
  //   width: 300px;
  //   height: 200px;
  width: 100%;
  //   @media screen and (max-width: 850px) {
  //     width: 250px;
  //   }
  //   @media screen and (max-width: 565px) {
  //     width: 350px;
  //     object-fit: contain;
  //   }
`
export const VideoProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 15px;
  width: 100%;
`
export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 15px;
`
export const VideoTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.textColor};
  width: 200px;
  font-family: 'Roboto';
  line-height: 1.3;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  //   @media screen and (max-width: 850px) {
  //     font-size: 13px;
  //   }
  //   @media screen and (max-width: 565px) {
  //     width: 80%;
  //   }
`

export const VideoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`
export const VideoName = styled.p`
  color: #616e7c;
  font-weight: 500;
  font-size: 13px;
  font-family: 'Roboto';
`
export const VideoDetails = styled.div``
export const PublishedDate = styled.span`
  color: #616e7c;
  font-weight: 500;
  font-size: 13px;
  font-family: 'Roboto';
`
export const ViewCount = styled.span`
  color: #616e7c;
  font-weight: 500;
  font-size: 13px;
  font-family: 'Roboto';
`
export const NavLinks = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`
