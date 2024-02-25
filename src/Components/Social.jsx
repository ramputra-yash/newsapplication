import React, { Component } from 'react'
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default class Social extends Component {
  render() {
    return (
      <div className='social'>
        <h1>We are Social</h1>
        <div className='s-content'>
          <a href='https://www.youtube.com/channel/UCkeoap5C5vX3-T3Fl_nTEMA'><FaYoutube style={{fontSize:'30px',color:'blue'}}/></a>
          <a href='https://www.facebook.com/profile.php?id=61555830084811'><FaFacebook style={{fontSize:'30px',color:'blue'}}/></a>
          <a href='https://github.com/ramputra-yash/'><FaGithub style={{fontSize:'30px',color:'black'}}/></a>
          <a href='https://www.linkedin.com/in/yogesh-sharma-5472142b3/'><FaLinkedin style={{fontSize:'30px',color:'blue'}}/></a>
        </div>
      </div>
    )
  }
}

