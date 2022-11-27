import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import {
  SavedVdContainer,
  SavedVdContent,
  SavedVdHeader,
  SavedVdLogo,
  SavedVdText,
  SavedVdData,
  NoVideosContainer,
  NoVideosHeading,
  NoVideosImage,
  NoVideosText,
  NoVideos,
} from './StyledSaved'
import {SidebarContainer} from '../HomeRoute/StyledHome'
import HeaderRoute from '../HeaderRoute'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import SavedVideoData from '../SavedVideoData'

class SavedVideoRoute extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme, savedVideos} = value
          console.log(savedVideos)
          const bgColor = showTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = !showTheme ? '#181818' : '#ffffff'
          const headerBg = !showTheme ? '#d7dfe9' : '#212121'
          const radiusBg = !showTheme ? '#e2e8f0' : '#181818'
          const noVdColor = showTheme ? '#d7dfe9' : '#212121'

          return (
            <>
              <HeaderRoute />
              <SavedVdContainer data-testid="savedVideos" bgColor={bgColor}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>

                <SavedVdContent>
                  <SavedVdHeader headerBg={headerBg}>
                    <SavedVdLogo radiusBg={radiusBg}>
                      <AiFillFire size={25} color="#ff0b37" />
                    </SavedVdLogo>
                    <SavedVdText textColor={textColor}>
                      Saved Videos
                    </SavedVdText>
                  </SavedVdHeader>
                  {savedVideos.length !== 0 ? (
                    <SavedVdData>
                      {savedVideos.map(data => (
                        <SavedVideoData data={data} key={data.id} />
                      ))}
                    </SavedVdData>
                  ) : (
                    <NoVideos>
                      <NoVideosContainer>
                        <NoVideosImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                          alt="no saved videos"
                        />
                        <NoVideosHeading bgColor={noVdColor}>
                          No saved videos found
                        </NoVideosHeading>
                        <NoVideosText textColor={textColor}>
                          You can save your videos while watching them
                        </NoVideosText>
                      </NoVideosContainer>
                    </NoVideos>
                  )}
                </SavedVdContent>
              </SavedVdContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideoRoute
