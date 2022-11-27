import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingVdLists = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const TrendingVdImage = styled.div`
  margin-bottom: 8px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`
export const TrendingVideoImg = styled.img`
  width: 400px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`
export const TrendingVdCard = styled.div`
  padding-bottom: 20px;
  margin: 10px;
  align-self: flex-start;
`
export const TrendingVdTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.titleColor};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const TrendingVdName = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.subColor};
`

export const TrendingVdViews = styled.span`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.subColor};
`
export const TrendingVdDate = styled.span`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.subColor};
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
