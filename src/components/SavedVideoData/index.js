import {Component} from 'react'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {
  SavedVdLists,
  SavedVdImage,
  SavedVideoImg,
  SavedVdCard,
  SavedVdTitle,
  SavedVdViews,
  SavedVdName,
  NavLink,
  SavedVdDate,
} from './StyledSavedVd'
import ThemeContext from '../../context/ThemeContext'

class SavedVideoData extends Component {
  render() {
    const {data} = this.props
    console.log(data)
    const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = data
    const {name} = channel

    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value
          const titleColor = showTheme ? '#f1f1f1' : '#212121'
          const subColor = showTheme ? '#616e7c' : '#7e858e'
          return (
            <NavLink to={`/videos/${id}`}>
              <SavedVdLists>
                <SavedVdImage>
                  <SavedVideoImg src={thumbnailUrl} alt="video thumbnail" />
                </SavedVdImage>
                <SavedVdCard>
                  <SavedVdTitle titleColor={titleColor}>{title}</SavedVdTitle>
                  <SavedVdName subColor={subColor}>{name}</SavedVdName>
                  <SavedVdViews subColor={subColor}>
                    {viewCount} views <BsDot />
                  </SavedVdViews>
                  <SavedVdDate subColor={subColor}>
                    {formatDistanceToNow(new Date(publishedAt))}
                  </SavedVdDate>
                </SavedVdCard>
              </SavedVdLists>
            </NavLink>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideoData
