import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../middleware/api'
import appLoading  from '../actions/loading'
import fetchPlayer from '../actions/fetch-player'
import Title from '../components/Title'

export class PlayerProfile extends Component {

  componentWillMount(){
    this.props.appLoading(true)
  }
  componentDidMount(){
    const { fetchPlayer, appLoading } = this.props
    const { playerId } = this.props.routeParams
    api.get('players/'+playerId)
    .then((player) =>{
        fetchPlayer(player)
        appLoading(false)
    })
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
    player: state.player
  }
}

export default connect(mapStateToProps, {appLoading, fetchPlayer})(PlayerProfile)
