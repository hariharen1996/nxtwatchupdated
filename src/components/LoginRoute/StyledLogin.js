/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.loginBg};
`

export const LoginCard = styled.div`
  background-color: ${props => props.bgColor};
  box-shadow: ${props => props.boxShadow};
  padding: 20px;
  width: 400px;
  height:600px
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius:10px;
  @media screen and (max-width:460px){
      width:300px;
  }
  `

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const LogoImage = styled.img`
  width: 150px;
  padding-bottom: 20px;
`

export const LoginLabel = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 5px;
  font-weight: 500;
  align-self: flex-start;
  margin-top: 10px;
`

export const LoginInput = styled.input`
  width: 100%;
  height: 25px;
  background: #f9f9f9;
  padding: 15px;
  border: 1px solid #d7dfe9;
  margin: 5px;
`

export const Button = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 10px;
  align-self: center;
  padding: 10px;
`

export const ShowPasswordInput = styled.input`
  margin: 2px;
`

export const PasswordLabel = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  margin: 2px;
`

export const PasswordCheck = styled.div`
  display: flex;
  align-self: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
`

export const ThemeChanger = styled.div``
export const ThemeBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  padding-bottom: 15px;
  cursor: pointer;
`
