import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import Loader from 'react-loader-spinner'
import HeaderRoute from '../HeaderRoute/index'
import Sidebar from '../Sidebar/index'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  SidebarContainer,
  HomeContent,
  HomeVideoItems,
  HomeVideoContainer,
  VideoFailure,
  FailureImage,
  FailureHeading,
  FailureMessage,
  SearchContainer,
  SearchInput,
  SearchIconButton,
  FailureBtn,
  FailureContainer,
} from './StyledHome'
import BannerRoute from '../BannerRoute'
import VideoRoute from '../VideoRoute/index'
import './index.css'

const constantTypes = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class HomeRoute extends Component {
  state = {
    searchResults: [],
    searchInput: '',
    apiStatus: constantTypes.initial,
  }

  componentDidMount() {
    this.getSearchResults()
  }

  getSearchResults = async () => {
    this.setState({apiStatus: constantTypes.loading})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
      options,
    )
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(videoData => ({
        id: videoData.id,
        channel: {
          name: videoData.channel.name,
          profileImage: videoData.channel.profile_image_url,
        },
        publishedAt: videoData.published_at,
        thumbnailUrl: videoData.thumbnail_url,
        title: videoData.title,
        viewCount: videoData.view_count,
      }))
      this.setState({
        searchResults: updatedData,
        apiStatus: constantTypes.success,
      })
    } else {
      this.setState({apiStatus: constantTypes.failure})
    }
  }

  renderSuccess = () => {
    const {searchResults} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value
          const headingColor = !showTheme ? '#212121' : '#f4f4f4'
          const paraColor = showTheme ? '#909090' : '#909090'

          return searchResults.length !== 0 ? (
            <>
              <HomeVideoItems>
                {searchResults.map(data => (
                  <VideoRoute key={data.id} data={data} />
                ))}
              </HomeVideoItems>
            </>
          ) : (
            <VideoFailure>
              <FailureContainer>
                <FailureImage
                  search
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <FailureHeading headingColor={headingColor}>
                  No Search Results Found
                </FailureHeading>
                <FailureMessage paraColor={paraColor}>
                  Try different key words or remove search filter
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

  retrySearch = () => {
    this.getSearchResults()
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
              <FailureBtn type="button" onClick={this.retrySearch}>
                Retry
              </FailureBtn>
            </FailureContainer>
          </VideoFailure>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderStatus = () => {
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

  onSearchVideo = event => {
    this.setState({searchInput: event.target.value})
  }

  displayVideo = () => {
    this.getSearchResults()
  }

  render() {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value
          const bgColor = showTheme ? '#181818' : '#f9f9f9'
          const searchColor = !showTheme ? '#cccccc' : '#313131'
          return (
            <>
              <HeaderRoute />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <HomeContent>
                  <BannerRoute />
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      textColor={!showTheme ? '#000000' : '#ffffff'}
                      value={searchInput}
                      onChange={this.onSearchVideo}
                    />
                    <SearchIconButton
                      type="button"
                      searchColor={searchColor}
                      onClick={this.displayVideo}
                      data-testid="searchButton"
                    >
                      <FiSearch size={20} />
                    </SearchIconButton>
                  </SearchContainer>
                  <HomeVideoContainer>{this.renderStatus()}</HomeVideoContainer>
                </HomeContent>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeRoute
