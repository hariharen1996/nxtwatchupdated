import styled from 'styled-components'

export const VideoLists = styled.div``
export const PlayerTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  margin: 10px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const PlayerDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const PlayerCounts = styled.div`
  margin: 10px;
  @media screen and (max-width: 400px) {
    margin-left: 20px;
  }
`
export const PlayerLikesData = styled.div`
  margin: 10px;
`
export const PlayerLikes = styled.span`
  color: #616e7c;
  font-weight: 500;
  font-size: 17px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const SpanText = styled.span`
  color: ${props => props.color};
`
export const PlayerDate = styled(PlayerLikes)``
export const Likes = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 5px;
  color: ${props => props.iconsColor};
  font-size: 16px;
  font-family: 'Roboto';
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const Dislikes = styled(Likes)``
export const Save = styled(Likes)``

export const HorizontalLine = styled.hr`
  width: 98%;
  color: #909090;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (max-width: 765px) {
    width: 93%;
  }
`

export const PlayerProfile = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`
export const PlayerImage = styled.img`
  width: 45px;
  height: 45px;
`
export const PlayerContent = styled.div``

export const PlayerNames = styled.p`
  color: ${props => (!props.showTheme ? '#000000' : '#f1f1f1')};
  font-family: "Roboto"
  font-size:20px;
  font-weight:500;
`

export const PlayerSubCount = styled.p`
  color: ${props => props.iconsColor};
  font-family: "Roboto"
  font-size:20px;
  font-weight:500;
`
export const PlayerDescription = styled.p`
  font-size: 15px;
  color: ${props => props.iconsColor};
  font-family: 'Roboto';
  margin-left: 70px;
  line-height: 1.3;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    margin-left: 15px;
    font-size: 12px;
  }
`
