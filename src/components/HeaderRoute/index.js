import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {
  RiLightbulbFlashFill,
  RiLightbulbFlashLine,
  RiLogoutBoxRFill,
  RiLogoutBoxRLine,
} from 'react-icons/ri'
import HeaderPopup from '../HeaderPopup/index'
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  NavItems,
  NavLinks,
  HeaderButton,
  LogoutButton,
  LogoutButtonSm,
  ProfileImage,
  NavLinksContainer,
  LogoutModal,
  LogoutHead,
  ConfirmBtnContainer,
  CloseBtn,
  ConfirmBtn,
  LogoutModalContainer,
  NavLink,
} from './StyledHeader'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class HeaderRoute extends Component {
  render() {
    const logoutApp = () => {
      const {history} = this.props
      Cookies.remove('jwt_token')
      history.replace('/login')
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme, changeTheme} = value

          const onChangeTheme = () => {
            changeTheme()
          }

          const bgColor = showTheme ? 'bgLight' : 'bgDark'
          const btnColor = !showTheme ? '#3f36e5' : '#ffffff'
          const btnBorder = !showTheme
            ? '1px solid #3f36e5'
            : '1px solid #ffffff'
          const modalColor = showTheme ? '#212121' : '#ffffff'
          const textColor = !showTheme ? '#616e7c' : '#7e858e'
          const logoImage = !showTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <>
              <HeaderContainer className={bgColor}>
                <NavLink to="/">
                  <LogoContainer>
                    <LogoImage src={logoImage} alt="website logo" />
                  </LogoContainer>
                </NavLink>
                <NavLinksContainer>
                  <NavItems>
                    <NavLinks>
                      <HeaderButton
                        type="button"
                        data-testid="theme"
                        onClick={onChangeTheme}
                      >
                        {!showTheme ? (
                          <RiLightbulbFlashFill className="theme-icon" />
                        ) : (
                          <RiLightbulbFlashLine className="theme-icon icon" />
                        )}
                      </HeaderButton>
                    </NavLinks>
                    <NavLinks>
                      <ProfileImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </NavLinks>
                    <NavLinks>
                      <HeaderPopup />
                    </NavLinks>
                    <NavLinks>
                      <Popup
                        modal
                        trigger={
                          <LogoutButton
                            type="button"
                            btnBorder={btnBorder}
                            btnColor={btnColor}
                          >
                            Logout
                          </LogoutButton>
                        }
                        className="popup-content"
                      >
                        {close => (
                          <LogoutModalContainer>
                            <LogoutModal modalColor={modalColor}>
                              <LogoutHead textColor={textColor}>
                                Are you sure, you want to logout?
                              </LogoutHead>
                              <ConfirmBtnContainer>
                                <CloseBtn
                                  type="button"
                                  data-testid="closeButton"
                                  onClick={() => close()}
                                >
                                  Cancel
                                </CloseBtn>
                                <ConfirmBtn type="button" onClick={logoutApp}>
                                  Confirm
                                </ConfirmBtn>
                              </ConfirmBtnContainer>
                            </LogoutModal>
                          </LogoutModalContainer>
                        )}
                      </Popup>
                    </NavLinks>
                    <NavLinks>
                      <Popup
                        modal
                        trigger={
                          <LogoutButtonSm
                            type="button"
                            btnBorder={btnBorder}
                            btnColor={btnColor}
                          >
                            {showTheme ? (
                              <RiLogoutBoxRLine className="icon-light" />
                            ) : (
                              <RiLogoutBoxRFill className="icon-dark" />
                            )}{' '}
                          </LogoutButtonSm>
                        }
                        className="popup-content"
                      >
                        {close => (
                          <LogoutModalContainer>
                            <LogoutModal modalColor={modalColor}>
                              <LogoutHead textColor={textColor}>
                                Are you sure, you want to logout?
                              </LogoutHead>
                              <ConfirmBtnContainer>
                                <CloseBtn
                                  type="button"
                                  data-testid="closeButton"
                                  onClick={() => close()}
                                >
                                  Cancel
                                </CloseBtn>
                                <ConfirmBtn type="button" onClick={logoutApp}>
                                  Confirm
                                </ConfirmBtn>
                              </ConfirmBtnContainer>
                            </LogoutModal>
                          </LogoutModalContainer>
                        )}
                      </Popup>
                    </NavLinks>
                  </NavItems>
                </NavLinksContainer>
              </HeaderContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(HeaderRoute)
