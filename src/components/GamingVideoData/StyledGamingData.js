import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingVdLists = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const GamingVdImage = styled.div`
  margin-bottom: 8px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`
export const GamingVideoImg = styled.img`
  width: 300px;
  @media screen and (max-width: 1200px) {
    width: 250px;
  }
  @media screen and (max-width: 785px) {
    width: 230px;
  }

  @media screen and (max-width: 656px) {
    width: 210px;
  }
  @media screen and (max-width: 460px) {
    width: 160px;
  }
  @media screen and (max-width: 360px) {
    width: 130px;
  }
`
export const GamingVdCard = styled.div`
  padding-bottom: 20px;
  margin: 10px;
  align-self: flex-start;
`
export const GamingVdTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.titleColor};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const GamingVdName = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.subColor};
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
`

export const GamingVdViews = styled.span`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.subColor};
  @media screen and (max-width: 600px) {
    font-size: 11px;
  }
  @media screen and (max-width: 400px) {
    font-size: 9px;
  }
`
export const GamingVdDate = styled.span`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.subColor};
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
