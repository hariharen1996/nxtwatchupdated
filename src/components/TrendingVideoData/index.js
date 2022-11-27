import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingVdLists,
  TrendingVdImage,
  TrendingVideoImg,
  TrendingVdCard,
  TrendingVdTitle,
  TrendingVdName,
  TrendingVdViews,
  TrendingVdDate,
  NavLink,
} from './StyledTrendingData'

class TrendingVideoData extends Component {
  render() {
    const {data} = this.props
    console.log(data)
    const {id, channel, publishedAt, thumbnailUrl, viewCount, title} = data
    const {name} = channel

    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value
          const titleColor = showTheme ? '#f1f1f1' : '#212121'
          const subColor = showTheme ? '#616e7c' : '#7e858e'
          return (
            <NavLink to={`/videos/${id}`}>
              <TrendingVdLists>
                <TrendingVdImage>
                  <TrendingVideoImg src={thumbnailUrl} alt="video thumbnail" />
                </TrendingVdImage>
                <TrendingVdCard>
                  <TrendingVdTitle titleColor={titleColor}>
                    {title}
                  </TrendingVdTitle>
                  <TrendingVdName subColor={subColor}>{name}</TrendingVdName>
                  <TrendingVdViews subColor={subColor}>
                    {viewCount} views <BsDot />
                  </TrendingVdViews>
                  <TrendingVdDate subColor={subColor}>
                    {formatDistanceToNow(new Date(publishedAt))}
                  </TrendingVdDate>
                </TrendingVdCard>
              </TrendingVdLists>
            </NavLink>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingVideoData
