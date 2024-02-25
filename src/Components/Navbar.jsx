import React, { Component } from "react";
import newsicon from '../assets/newsicon.jpg'
import { IoSearchSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { TiSocialYoutube } from "react-icons/ti";


export class Navbar extends Component {

  render() {

    return (
      <>
        <nav className="navbar">
            <a className="navbar-brand" href="">
              <img src={newsicon} alt=""/>
            </a>
            <div className="tabs">
              <ul onClick={(e) => {
                e.preventDefault();
                if(e.target.className === "menu open") {
                  document.querySelectorAll('li').forEach((li) => {
                    li.classList.toggle('open')
                  })
                }else if(e.target.className !== 'menu open') {
                  document.querySelectorAll('li').forEach((li) => {
                    li.classList.remove('open')
                  })
                  document.querySelector('.menu').classList.remove('open');
                }
                else {
                  document.querySelectorAll('li').forEach((li) => {
                    li.classList.remove('open')
                  })
                }
              }}>
                <div onClick={(e) => {
                  e.target.classList.toggle('open')
                }} className="menu"></div>
                <li><a href="#"><span><IoHomeOutline/></span>Home</a></li>
                <li onClick={this.props.onclickAbout}><a href="#about"><span><FcAbout /></span>About</a></li>
                <li onClick={this.props.onclickProject}><a href="#project"><span><GoProjectSymlink/></span>Projects</a></li>
                <li><a href="/"><span><TiSocialYoutube/></span>Social</a></li>
              </ul>
            </div>
            <div className="search">
              <input type="search" onChange={this.props.onInputChange} placeholder="Search..."/>
              <button onClick={this.props.onhandleClick}><IoSearchSharp/></button>
            </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
