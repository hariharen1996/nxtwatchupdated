import {Component} from 'react'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {HiSave} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {
  CloseBtn,
  PopupNavItems,
  PopupNavLists,
  NavLink,
  NavText,
  HamBurgerButton,
  PopupModal,
} from './StyledPopup'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class HeaderPopup extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme, active, changeActive} = value
          const bgColor = showTheme ? '#181818' : '#ffffff'
          const menuColor = !showTheme ? '#181818' : '#ffffff'

          /* const iconColor = showTheme ? 'menu-dark' : 'menu-light' */

          const changeHome = () => {
            changeActive('home')
          }

          const changeTrending = () => {
            changeActive('trending')
          }

          const changeGaming = () => {
            changeActive('gaming')
          }

          const changeSaved = () => {
            changeActive('saved')
          }

          const activeColor = showTheme ? '#475569' : '#cbd5e1'

          return (
            <Popup
              className="popup-content"
              modal
              trigger={
                <HamBurgerButton menuColor={menuColor}>
                  <GiHamburgerMenu />
                </HamBurgerButton>
              }
            >
              {close => (
                <PopupModal bgColor={bgColor}>
                  <CloseBtn onClick={() => close()} menuColor={menuColor}>
                    <IoMdClose size={25} />
                  </CloseBtn>
                  <PopupNavItems>
                    <NavLink to="/" onClick={() => close()}>
                      <PopupNavLists
                        bgColor={active === 'home' ? activeColor : ''}
                        onClick={changeHome}
                      >
                        <AiFillHome
                          color={active === 'home' ? 'ff0b37' : '#909090'}
                          size={25}
                        />
                        <NavText menuColor={menuColor}>Home</NavText>
                      </PopupNavLists>
                    </NavLink>
                    <NavLink to="/trending" onClick={() => close()}>
                      <PopupNavLists
                        bgColor={active === 'trending' ? activeColor : ''}
                        onClick={changeTrending}
                      >
                        <AiFillFire
                          color={active === 'trending' ? 'ff0b37' : '#909090'}
                          size={25}
                        />
                        <NavText menuColor={menuColor}>Trending</NavText>
                      </PopupNavLists>
                    </NavLink>
                    <NavLink to="/gaming" onClick={() => close()}>
                      <PopupNavLists
                        bgColor={active === 'gaming' ? activeColor : ''}
                        onClick={changeGaming}
                      >
                        <SiYoutubegaming
                          color={active === 'gaming' ? 'ff0b37' : '#909090'}
                          size={25}
                        />
                        <NavText menuColor={menuColor}>Gaming</NavText>
                      </PopupNavLists>
                    </NavLink>
                    <NavLink to="/saved-videos" onClick={() => close()}>
                      <PopupNavLists
                        bgColor={active === 'saved' ? activeColor : ''}
                        onClick={changeSaved}
                      >
                        <HiSave
                          color={active === 'saved' ? 'ff0b37' : '#909090'}
                          size={25}
                        />
                        <NavText menuColor={menuColor}>Saved Videos</NavText>
                      </PopupNavLists>
                    </NavLink>
                  </PopupNavItems>
                </PopupModal>
              )}
            </Popup>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HeaderPopup
