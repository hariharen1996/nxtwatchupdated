import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  padding: 20px;
  line-height: 2;
`
export const BannerLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const BannerBtn = styled.button`
  background: none;
  border: 1px solid #231f20;
  padding: 6px 16px;
  outline: none;
  color: #00306e;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
`
export const BannerText = styled.p`
  color: #00306e;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  max-width: 300px;
  margin-top: 15px;
`
export const LogoImage = styled.img`
  width: 160px;
  height: 30px;
  margin-top: 15px;
`
export const BannerCloseBtn = styled.button`
  border: none;
  outline: none;
  background: none;
`
