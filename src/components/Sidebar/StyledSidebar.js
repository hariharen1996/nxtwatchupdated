import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  flex-flow: column;
  width: 200px;
  background-color: ${props => props.bgColor};
  border-right: ${props => props.borderColor};
`
export const SidebarMenu = styled.div`
  align-self: flex-start;
  margin: 10px;
`
export const SidebarItems = styled.ul`
  padding-left: 0px;
`
export const SidebarLists = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 180px;
  padding: 3px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
`

export const LogoImage = styled.img`
  width: 160px;
  height: 30px;
  margin-bottom: 15px;
  @media screen and (max-width: 400px) {
    width: 100px;
  }
`

export const MenuText = styled.p`
  color: ${props => props.menuColor};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  //   &:hover {
  //     color: #ff0000;
  //     transition: 0.4s;
  //   }
`
export const SidebarContact = styled.div`
  align-self: flex-start;
  margin: 10px;
`
export const ContactHeading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  text-transform: uppercase;
  color: ${props => props.menuColor};
  font-weight: 500;
`
export const SocialImage = styled.div`
  display: flex;
`

export const Image = styled.img`
  width: 25px;
  height: 25px;
  margin: 5px;
  align-self: flex-start;
`

export const ContactDescription = styled.p`
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.menuColor};
  line-height: 1.4;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
