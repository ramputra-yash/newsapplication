import React, { Component } from 'react'
import newsicon from '../assets/newsicon.jpg'

export default class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <div className="h-img">
            <img src={newsicon} alt=''/>
        </div>
        <div className="h-content">
            <h2>Stay Informed,</h2>
            <h2>Stay Ahead.</h2>
        </div>
      </div>
    )
  }
}
