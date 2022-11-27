import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding: 15px;
  margin: 0px;
`
export const LogoContainer = styled.div`
  margin: 5px;
  margin-left: 200px;
  display: none;
  @media screen and (max-width: 800px) {
    margin-left: 0px;
    display: block;
  }
`
export const LogoImage = styled.img`
  width: 160px;
  height: 30px;
  @media screen and (max-width: 400px) {
    width: 100px;
  }
`
export const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  gap: 12px;
  @media screen and (max-width: 800px) {
    gap: 5px;
  }
`

export const NavLinksContainer = styled.div`
  margin-top: 5px;
`

export const NavLinks = styled.li`
  list-style: none;
  font-family:"Roboto"
  font-size:14px;
  font-weight:500;
`

export const HeaderButton = styled.button`
  background: none;
  font-size: 14px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 600;
  border: none;
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`

export const LogoutButton = styled(HeaderButton)`
  padding: 5px 16px;
  border: ${props => props.btnBorder};
  color: ${props => props.btnColor};
  display: block;
  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const LogoutButtonSm = styled(HeaderButton)`
  padding: 0px;
  margin: 0px;
  margin-left: 5px;
  display: block;
  font-size: 25px;
  margin-top: 3px;
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

export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  display: block;
  @media screen and (max-width: 800px) {
    display: none;
  }
`
export const LogoutModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const LogoutModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 350px;
  background-color: ${props => props.modalColor};
  border-radius: 10px;
  box-shadow: 0px 14px 8px rgba(7, 7, 7, 0.08);
  padding: 20px;
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 160px;
  }
`
export const LogoutHead = styled.p`
  color: ${props => props.textColor};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  align-self: center;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`
export const ConfirmBtnContainer = styled.div`
  align-self: center;
`
export const CloseBtn = styled.button`
  background: transparent;
  padding: 8px 16px;
  border: 1px solid #909090;
  color: #909090;
  outline: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
`
export const ConfirmBtn = styled(CloseBtn)`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
