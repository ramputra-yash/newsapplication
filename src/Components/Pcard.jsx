import React, { Component } from "react";
import tiktaktoe from "../assets/tiktaktoe.png";

export default class Pcard extends Component {
  render() {
    return (
      <>
        <a href={this.props.link}>
          <div className="p-card">
            <img src={this.props.img} alt="" />
            <div className="desc">
            <p>Features of Project</p>
            <span>
              {this.props.desc}
            </span>
            </div>
          </div>
        </a>
      </>
    );
  }
}
