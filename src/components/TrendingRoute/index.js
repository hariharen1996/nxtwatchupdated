import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import HeaderRoute from '../HeaderRoute/index'
import Sidebar from '../Sidebar/index'
import {
  TrendingContainer,
  TrendingContent,
  TrendingItems,
  TrendingVdHeader,
  TrendingVdLogo,
  TrendingVdText,
  TrendingVdData,
} from './StyledTrending'
import {
  SidebarContainer,
  VideoFailure,
  FailureImage,
  FailureHeading,
  FailureMessage,
  FailureBtn,
  FailureContainer,
} from '../HomeRoute/StyledHome'
import ThemeContext from '../../context/ThemeContext'
import TrendingVideoData from '../TrendingVideoData'

const constantTypes = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {trendingData: [], apiStatus: constantTypes.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: constantTypes.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(items => ({
        id: items.id,
        channel: {
          name: items.channel.name,
          profileImg: items.channel.profile_image_url,
        },
        publishedAt: items.published_at,
        thumbnailUrl: items.thumbnail_url,
        title: items.title,
        viewCount: items.view_count,
      }))
      this.setState({
        trendingData: updatedData,
        apiStatus: constantTypes.success,
      })
    } else {
      this.setState({apiStatus: constantTypes.failure})
    }
  }

  renderSuccess = () => {
    const {trendingData} = this.state
    console.log(trendingData)
    return (
      <TrendingItems>
        {trendingData.map(data => (
          <TrendingVideoData data={data} key={data.id} />
        ))}
      </TrendingItems>
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
              <FailureBtn type="button" onClick={this.retrySearch}>
                Retry
              </FailureBtn>
            </FailureContainer>
          </VideoFailure>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingStatus = () => {
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
          const bgColor = !showTheme ? '#f9f9f9' : '#0f0f0f'
          const headerBg = !showTheme ? '#d7dfe9' : '#212121'
          const radiusBg = !showTheme ? '#e2e8f0' : '#181818'
          const textColor = !showTheme ? '#181818' : '#ffffff'
          return (
            <>
              <HeaderRoute />
              <TrendingContainer data-testid="trending" bgColor={bgColor}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <TrendingContent>
                  <TrendingVdHeader headerBg={headerBg}>
                    <TrendingVdLogo radiusBg={radiusBg}>
                      <AiFillFire size={25} color="#ff0b37" />
                    </TrendingVdLogo>
                    <TrendingVdText textColor={textColor}>
                      Trending
                    </TrendingVdText>
                  </TrendingVdHeader>
                  <TrendingVdData>{this.renderTrendingStatus()}</TrendingVdData>
                </TrendingContent>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingRoute
