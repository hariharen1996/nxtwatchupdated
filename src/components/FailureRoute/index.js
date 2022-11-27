import {Component} from 'react'
import {FailureView, FailureImage} from './StyledFailure'
import ThemeContext from '../../context/ThemeContext'

class FailureRoute extends Component {
  render() {
    const {onRetry} = this.props

    const onRetryApi = () => {
      onRetry()
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value
          const FailureImg = showTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

          return (
            <FailureView>
              <FailureImage src={FailureImg} alt="failure view" />
              <h1>Oops! Something Went Wrong</h1>
              <p>
                We are having some trouble to complete your request. <br />
                Please try again later.
              </p>
              <button type="button" onClick={onRetryApi}>
                Retry
              </button>
            </FailureView>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default FailureRoute
