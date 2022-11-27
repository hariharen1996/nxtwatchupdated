import {Component} from 'react'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {HiSave} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {
  SidebarContainer,
  SidebarMenu,
  SidebarItems,
  SidebarLists,
  MenuText,
  SidebarContact,
  ContactHeading,
  Image,
  SocialImage,
  ContactDescription,
  NavLink,
  LogoImage,
} from './StyledSidebar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Sidebar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme, active, changeActive} = value

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

          const bgColor = showTheme ? '#231f20' : '#f4f4f4'
          const menuColor = !showTheme ? '#212121' : '#ffffff'
          /* const borderColor = !showTheme
            ? '1px solid #212121'
            : '0.1px solid #cbd5e1' */

          /* const iconColor = showTheme ? 'menu-dark' : 'menu-light' */

          const logoImage = !showTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <SidebarContainer bgColor={bgColor}>
              <SidebarMenu>
                <SidebarItems>
                  <SidebarLists>
                    <LogoImage src={logoImage} alt="website logo" />
                  </SidebarLists>
                  <NavLink to="/">
                    <SidebarLists
                      bgColor={active === 'home' ? activeColor : ''}
                      onClick={changeHome}
                    >
                      <AiFillHome
                        color={active === 'home' ? 'ff0b37' : '#909090'}
                        size={25}
                      />
                      <MenuText menuColor={menuColor}>Home</MenuText>
                    </SidebarLists>
                  </NavLink>
                  <NavLink to="/trending">
                    <SidebarLists
                      bgColor={active === 'trending' ? activeColor : ''}
                      onClick={changeTrending}
                    >
                      <AiFillFire
                        color={active === 'trending' ? 'ff0b37' : '#909090'}
                        size={25}
                      />
                      <MenuText menuColor={menuColor}>Trending</MenuText>
                    </SidebarLists>
                  </NavLink>
                  <NavLink to="/gaming">
                    <SidebarLists
                      bgColor={active === 'gaming' ? activeColor : ''}
                      onClick={changeGaming}
                    >
                      <SiYoutubegaming
                        color={active === 'gaming' ? 'ff0b37' : '#909090'}
                        size={25}
                      />
                      <MenuText menuColor={menuColor}>Gaming</MenuText>
                    </SidebarLists>
                  </NavLink>
                  <NavLink to="/saved-videos">
                    <SidebarLists
                      bgColor={active === 'saved' ? activeColor : ''}
                      onClick={changeSaved}
                    >
                      <HiSave
                        color={active === 'saved' ? 'ff0b37' : '#909090'}
                        size={25}
                      />
                      <MenuText menuColor={menuColor}>Saved Videos</MenuText>
                    </SidebarLists>
                  </NavLink>
                </SidebarItems>
              </SidebarMenu>
              <SidebarContact>
                <ContactHeading menuColor={menuColor}>
                  contact us
                </ContactHeading>
                <SocialImage>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialImage>
                <ContactDescription menuColor={menuColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactDescription>
              </SidebarContact>
            </SidebarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Sidebar
