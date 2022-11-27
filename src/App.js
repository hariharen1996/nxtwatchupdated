// Replace your code here
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute/index'
import HomeRoute from './components/HomeRoute/index'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideoRoute from './components/SavedVideoRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import './App.css'
import NotFoundRoute from './components/NotFoundRoute'

// Replace your code here
class App extends Component {
  state = {showTheme: false, savedVideos: [], active: 'home'}

  changeTheme = () => {
    this.setState(prevState => ({
      showTheme: !prevState.showTheme,
    }))
  }

  changeActive = tabs => {
    this.setState({active: tabs})
  }

  addVideos = data => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, data],
    }))
  }

  deleteVideos = id => {
    const {savedVideos} = this.state
    const unSaveVideo = savedVideos.filter(item => item.id !== id)
    this.setState({savedVideos: unSaveVideo})
  }

  render() {
    const {showTheme, savedVideos, active} = this.state
    return (
      <ThemeContext.Provider
        value={{
          showTheme,
          changeTheme: this.changeTheme,
          savedVideos,
          addVideos: this.addVideos,
          deleteVideos: this.deleteVideos,
          active,
          changeActive: this.changeActive,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideoRoute}
          />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <Route exact component={NotFoundRoute} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
