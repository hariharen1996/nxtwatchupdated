import React from 'react'

const ThemeContext = React.createContext({
  showTheme: false,
  changeTheme: () => {},
  savedVideos: [],
  deleteVideos: () => {},
  addVideos: () => {},
  active: 'home',
  changeActive: () => {},
})

export default ThemeContext
