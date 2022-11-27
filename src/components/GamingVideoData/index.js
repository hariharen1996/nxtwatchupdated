import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingVdLists,
  GamingVdImage,
  GamingVideoImg,
  GamingVdCard,
  GamingVdTitle,
  GamingVdViews,
  NavLink,
} from './StyledGamingData'

class GamingVideoData extends Component {
  render() {
    const {data} = this.props
    console.log(data)
    const {thumbnailUrl, viewCount, title, id} = data

    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value
          const titleColor = showTheme ? '#f1f1f1' : '#212121'
          const subColor = showTheme ? '#616e7c' : '#7e858e'
          return (
            <NavLink to={`/videos/${id}`}>
              <GamingVdLists>
                <GamingVdImage>
                  <GamingVideoImg src={thumbnailUrl} alt="video thumbnail" />
                </GamingVdImage>
                <GamingVdCard>
                  <GamingVdTitle titleColor={titleColor}>{title}</GamingVdTitle>
                  <GamingVdViews subColor={subColor}>
                    {viewCount} Watching Worldwide
                  </GamingVdViews>
                </GamingVdCard>
              </GamingVdLists>
            </NavLink>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingVideoData
