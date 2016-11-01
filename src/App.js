import React from 'react'
import Title from './components/Title'
import './App.sass'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Title label="Scoreboard" />
      </div>
    )
  }
}

export default App
