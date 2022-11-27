import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../HeaderRoute/index'
import Sidebar from '../Sidebar/index'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoDetailsContainer,
  SpecificVideosContainer,
  SidebarContainer,
  VideoItemsContainer,
  FailureContainer,
  FailureBtn,
  FailureHeading,
  FailureMessage,
  VideoFailure,
  FailureImage,
} from './StyledVideoItems'

import SpecificVideos from '../SpecificVideos'

const constantTypes = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {videoData: [], apiStatus: constantTypes.initial}

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({apiStatus: constantTypes.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImg: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
      }
      this.setState({videoData: updatedData, apiStatus: constantTypes.success})
    } else {
      this.setState({apiStatus: constantTypes.failure})
    }
  }

  renderSuccess = () => {
    const {videoData} = this.state
    return (
      <SpecificVideosContainer>
        <SpecificVideos data={videoData} />
      </SpecificVideosContainer>
    )
  }

  renderLoading = () => (
    <ThemeContext.Consumer>
      {value => {
        const {showTheme} = value
        return (
          <div className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={!showTheme ? '#000000' : '#ffffff'}
              height="50"
              width="50"
            />
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  retryVideoDetails = () => {
    this.getVideoData()
  }

  renderFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {showTheme} = value
        const failureImage = !showTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        const headingColor = !showTheme ? '#212121' : '#f4f4f4'
        const paraColor = showTheme ? '#909090' : '#909090'
        return (
          <VideoFailure>
            <FailureContainer>
              <FailureImage src={failureImage} alt="failure view" />
              <FailureHeading headingColor={headingColor}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureMessage paraColor={paraColor}>
                We are having some trouble to complete your request. Please try
                again.
              </FailureMessage>
              <FailureBtn type="button" onClick={this.retryVideoDetails}>
                Retry
              </FailureBtn>
            </FailureContainer>
          </VideoFailure>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoDetailsStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case constantTypes.success:
        return this.renderSuccess()
      case constantTypes.failure:
        return this.renderFailure()
      case constantTypes.loading:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value

          const bgColor = showTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <>
              <Header />
              <VideoItemsContainer
                bgColor={bgColor}
                data-testid="videoItemDetails"
              >
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <VideoDetailsContainer>
                  {this.renderVideoDetailsStatus()}
                </VideoDetailsContainer>
              </VideoItemsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
