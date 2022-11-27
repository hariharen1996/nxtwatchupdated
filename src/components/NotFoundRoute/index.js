import {Component} from 'react'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
  NotFoundContent,
} from './StyledNotFound'
import ThemeContext from '../../context/ThemeContext'
import HeaderRoute from '../HeaderRoute'
import {SidebarContainer} from '../HomeRoute/StyledHome'
import Sidebar from '../Sidebar'

class NotFoundRoute extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value
          const bgColor = showTheme ? '#181818' : '#f9f9f9'
          const headColor = !showTheme ? '#1e293b' : '#ffffff'
          const textColor = !showTheme ? '#64748b' : '#919191'

          const notFoundImage = !showTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

          return (
            <>
              <HeaderRoute />
              <NotFoundContainer bgColor={bgColor}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <NotFoundContent>
                  <NotFoundImage src={notFoundImage} alt="not found" />
                  <NotFoundHeading headColor={headColor}>
                    Page Not Found
                  </NotFoundHeading>
                  <NotFoundText textColor={textColor}>
                    We are sorry, the page you requested cannot be found.
                  </NotFoundText>
                </NotFoundContent>
              </NotFoundContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFoundRoute
