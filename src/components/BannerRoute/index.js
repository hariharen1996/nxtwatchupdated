import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import {
  BannerContainer,
  BannerLogoContainer,
  BannerBtn,
  BannerText,
  LogoImage,
  BannerCloseBtn,
} from './StyledBanner'
import './index.css'

class BannerRoute extends Component {
  state = {close: true}

  closeBanner = () => {
    this.setState({close: false})
  }

  render() {
    const {close} = this.state
    const logoImg =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      close && (
        <BannerContainer data-testid="banner">
          <BannerLogoContainer>
            <LogoImage src={logoImg} alt="nxt watch logo" />
            <BannerCloseBtn
              type="button"
              data-testid="close"
              onClick={this.closeBanner}
            >
              <GrFormClose size={20} cursor="pointer" />
            </BannerCloseBtn>
          </BannerLogoContainer>
          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
          <BannerBtn type="button">GET IT NOW</BannerBtn>
        </BannerContainer>
      )
    )
  }
}

export default BannerRoute
