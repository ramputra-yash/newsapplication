import React, { Component } from 'react'
import earchImage from "../assets/earth.jpg";
import Pcard from './Pcard';
import tiktaktoe from "../assets/tiktaktoe.png";
import spacegame from "../assets/spacegame.png";
import notesapp from "../assets/notesapp.png";
import vainkunth from "../assets/vainkunth.png";

export default class Projects extends Component {
  render() {
    return (
      <>
        <div className='project'>
            <a href="#project" id="project"></a>
            <h1>Projects</h1>
            <div className='p-content'>
                <Pcard link={'https://ramputra-yash.github.io/tiktaktoe/'} img={tiktaktoe} desc={'This is a two player tik tak toe game developed by html, css and javascript. play and enjoy and rate this game out of 10'}/>
                <Pcard link={'https://ramputra-yash.github.io/spacegame/'} img={spacegame} desc={'Here is a space invedors game developed by html and javascript. I hope you can enjoy this game'}/>
                <Pcard link={'https://ramputra-yash.github.io/notesapp/'} img={notesapp} desc={'This is a fully funtional notes application developed by yogesh sharma. in this application you can edit and save your notes for long time. you can use this application for your daily work'}/>
                <Pcard link={'https://ramputra-yash.github.io/Vaikunth/'} img={vainkunth} desc={'Vaikunth Computer Institute is my institute that you will see in after few months. so, if you want to learn computers basic of computer and specialy coding so you can join us for learn computers coding.'}/>
            </div>
        </div>
      </>
    )
  }
}
