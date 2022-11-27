import {Component} from 'react'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiSave} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoLists,
  PlayerTitle,
  PlayerDetails,
  PlayerCounts,
  PlayerLikes,
  PlayerDate,
  PlayerLikesData,
  Likes,
  Dislikes,
  Save,
  HorizontalLine,
  PlayerProfile,
  PlayerImage,
  PlayerNames,
  PlayerSubCount,
  PlayerContent,
  PlayerDescription,
  SpanText,
} from './StyledSpecificVideos'
import ThemeContext from '../../context/ThemeContext'

class SpecificVideos extends Component {
  state = {showLike: false, showDislike: false}

  onLike = () => {
    this.setState(prevState => ({
      showLike: !prevState.showLike,
      showDislike: prevState.showLike,
    }))
  }

  onDislike = () => {
    this.setState(prevState => ({
      showLike: prevState.showDislike,
      showDislike: !prevState.showDislike,
    }))
  }

  render() {
    const {data} = this.props
    const {
      channel,
      id,
      description,
      publishedAt,
      title,
      viewCount,
      videoUrl,
    } = data
    const {name, profileImg, subscriberCount} = channel
    const {showLike, showDislike} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme, savedVideos, addVideos, deleteVideos} = value
          const textColor = !showTheme ? '#181818' : '#f1f1f1'
          const iconsColor = !showTheme ? '#606060' : '#64748b'
          let isSaved
          const isVideoPresent = savedVideos.some(items => items.id === id)
          const isSavedIndex = savedVideos.findIndex(items => items.id === id)

          if (isSavedIndex === -1) {
            isSaved = false
          } else {
            isSaved = true
          }

          const savedColor = !isSaved ? '#64748b' : '#2563eb'

          const getSavedVideos = () => {
            addVideos(data)
          }

          const unSavedVideos = () => {
            deleteVideos(id)
          }

          return (
            <VideoLists>
              <ReactPlayer url={videoUrl} width="100%" controls />
              <PlayerTitle textColor={textColor}>{title}</PlayerTitle>
              <PlayerDetails>
                <PlayerCounts>
                  <PlayerLikes>
                    {viewCount} views <BsDot />
                  </PlayerLikes>
                  <PlayerDate>
                    {formatDistanceToNow(new Date(publishedAt))}
                  </PlayerDate>
                </PlayerCounts>

                <PlayerLikesData>
                  <Likes
                    type="button"
                    onClick={this.onLike}
                    iconsColor={iconsColor}
                  >
                    <AiOutlineLike color={!showLike ? '#64748b' : '#2563eb'} />{' '}
                    <SpanText color={!showLike ? '#64748b' : '#2563eb'}>
                      Likes
                    </SpanText>
                  </Likes>
                  <Dislikes
                    iconsColor={iconsColor}
                    type="button"
                    onClick={this.onDislike}
                  >
                    <AiOutlineDislike
                      color={!showDislike ? '#64748b' : '#2563eb'}
                    />
                    <SpanText color={!showDislike ? '#64748b' : '#2563eb'}>
                      Dislike
                    </SpanText>
                  </Dislikes>
                  {isVideoPresent ? (
                    <Save
                      type="button"
                      onClick={unSavedVideos}
                      iconsColor={iconsColor}
                    >
                      <BiSave color={savedColor} />
                      <SpanText color={savedColor}>Saved</SpanText>
                    </Save>
                  ) : (
                    <Save
                      type="button"
                      onClick={getSavedVideos}
                      iconsColor={iconsColor}
                    >
                      <BiSave color={savedColor} />
                      <SpanText color={savedColor}>Save</SpanText>
                    </Save>
                  )}
                </PlayerLikesData>
              </PlayerDetails>
              <HorizontalLine />
              <PlayerProfile>
                <PlayerImage src={profileImg} alt="channel logo" />
                <PlayerContent>
                  <PlayerNames showTheme={showTheme}>{name}</PlayerNames>
                  <PlayerSubCount iconsColor={iconsColor}>
                    {subscriberCount} subscribers
                  </PlayerSubCount>
                </PlayerContent>
              </PlayerProfile>
              <PlayerDescription iconsColor={textColor}>
                {description}
              </PlayerDescription>
            </VideoLists>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SpecificVideos
