import React from 'react'
import Scoreboard from './containers/Scoreboard'
import Title from './components/Title'
import CreatePlayer from './components/CreatePlayer'
import './App.sass'


class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Title label="Scoreboard" />
        <CreatePlayer />
        <Scoreboard />
      </div>
    )
  }
}

export default App
