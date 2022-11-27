import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVdLists = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 100%;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const SavedVdImage = styled.div`
  margin-bottom: 15px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`
export const SavedVideoImg = styled.img`
  width: 400px;
  height: 400px;
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 400px;
  }
`
export const SavedVdCard = styled.div`
  padding-bottom: 20px;
  margin: 10px;
`
export const SavedVdTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.titleColor};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const SavedVdName = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.subColor};
`

export const SavedVdViews = styled.span`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.subColor};
`
export const SavedVdDate = styled.span`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.subColor};
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
