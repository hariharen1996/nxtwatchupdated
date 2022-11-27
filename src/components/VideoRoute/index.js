import {Component} from 'react'
import {BsDot} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoLists,
  VideoImage,
  VideoProfile,
  ProfileImage,
  VideoTitle,
  VideoName,
  PublishedDate,
  ViewCount,
  VideoDetails,
  VideoContent,
  NavLinks,
} from './StyledVideo'

class VideoRoute extends Component {
  render() {
    const {data} = this.props
    const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = data
    const {name, profileImage} = channel

    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value

          const textColor = !showTheme ? '#181818' : '#ffffff'
          return (
            <VideoLists>
              <NavLinks to={`videos/${id}`}>
                <VideoImage src={thumbnailUrl} alt="video thumbnail" />
                <VideoProfile>
                  <ProfileImage src={profileImage} alt="channel logo" />
                  <VideoContent>
                    <VideoTitle textColor={textColor}>{title}</VideoTitle>
                    <VideoName>{name}</VideoName>
                    <VideoDetails>
                      <ViewCount>
                        {viewCount} likes <BsDot />
                      </ViewCount>
                      <PublishedDate>{publishedAt} </PublishedDate>
                    </VideoDetails>
                  </VideoContent>
                </VideoProfile>
              </NavLinks>
            </VideoLists>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoRoute
