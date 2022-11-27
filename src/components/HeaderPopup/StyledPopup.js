import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HamBurgerButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 25px;
  margin-top: 3px;
  color: ${props => props.menuColor};
  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin-top: 5px;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 800px) {
    display: block;
  }
`
export const PopupModal = styled.div`
  width: 102%;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  background-color: ${props => props.bgColor};
  overflow-y: hidden;
`
export const CloseBtn = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  color: ${props => props.menuColor};
`
export const PopupNavItems = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`
export const PopupNavLists = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #181818;
  text-decoration: none;
  margin-bottom: 25px;
  gap: 10px;
  background-color: ${props => props.bgColor};
  padding: 10px;
  border-radius: 10px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  margin: 0px;
  margin-left: 8px;
  color: ${props => props.menuColor};
  &:hover {
    color: #ff0000;
    transition: 0.4s;
  }
`
