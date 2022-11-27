import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import HeaderRoute from '../HeaderRoute/index'
import Sidebar from '../Sidebar/index'
import ThemeContext from '../../context/ThemeContext'
import GamingVideoData from '../GamingVideoData/index'
import {
  VideoFailure,
  FailureImage,
  FailureHeading,
  FailureMessage,
  FailureBtn,
  FailureContainer,
  SidebarContainer,
} from '../HomeRoute/StyledHome'
import {
  GamingContainer,
  GamingContent,
  GamingItems,
  GamingVdHeader,
  GamingVdLogo,
  GamingVdText,
  GamingVdData,
} from './StyledGaming'

const constantTypes = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {gamingData: [], apiStatus: constantTypes.initial}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: constantTypes.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(items => ({
        id: items.id,
        title: items.title,
        thumbnailUrl: items.thumbnail_url,
        viewCount: items.view_count,
      }))
      this.setState({gamingData: updatedData, apiStatus: constantTypes.success})
    } else {
      this.setState({apiStatus: constantTypes.failure})
    }
  }

  renderSuccess = () => {
    const {gamingData} = this.state
    console.log(gamingData)
    return (
      <GamingItems>
        {gamingData.map(data => (
          <GamingVideoData data={data} key={data.id} />
        ))}
      </GamingItems>
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

  renderGamingStatus = () => {
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
              <GamingContainer data-testid="gaming" bgColor={bgColor}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <GamingContent>
                  <GamingVdHeader headerBg={headerBg}>
                    <GamingVdLogo radiusBg={radiusBg}>
                      <AiFillFire size={25} color="#ff0b37" />
                    </GamingVdLogo>
                    <GamingVdText textColor={textColor}>Gaming</GamingVdText>
                  </GamingVdHeader>
                  <GamingVdData>{this.renderGamingStatus()}</GamingVdData>
                </GamingContent>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingRoute
