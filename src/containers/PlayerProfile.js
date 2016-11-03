import React, { Component } from 'react'
import { connect } from 'react-redux'
import setPlayerProfile from '../actions/set-player-profile'
import Title from '../components/Title'

export class PlayerProfile extends Component {

  componentDidMount(){
    const { setPlayerProfile } = this.props
    const { playerId } = this.props.routeParams
    setPlayerProfile(parseInt(playerId))
  }

  render() {

    if(this.props.player){
      const { avatar, name, points } = this.props.player

      return (
        <div>
          <Title label="Player Profile" />
          <li className="player">
            <div className="avatar">
              <img src={ avatar } />
            </div>
            <div className="label">
              <h3>
                <span className="score">{ points }</span>
                .&nbsp;
                <span className="name" >{ name }</span>
              </h3>
            </div>
          </li>
        </div>
      )
    }else{
      return(
        <Title label="Profile not found" />
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {
    player: state.players.reduce((prev, next) =>  {
      return next.playerId === state.playerProfileId ?
        next : prev
    }, null)
  }
}

export default connect(mapStateToProps, {setPlayerProfile})(PlayerProfile)
