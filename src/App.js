import React from 'react'
import Scoreboard from './containers/Scoreboard'
import Title from './components/Title'
import './App.sass'

class App extends React.Component {
  render() {
    const { players } = this.props
    
    return (
      <div className="app">
        <Title label="Scoreboard" />
        <Scoreboard players={ players } />
      </div>
    )
  }
}

export default App
