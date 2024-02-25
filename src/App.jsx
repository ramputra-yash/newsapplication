import { useState } from 'react'
import './App.css'

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import About from './Components/About'
import Projects from './Components/Projects'
import Hero from './Components/Hero'
import Social from './Components/Social'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      category: 'general',
      country: 'in',
      loading: false,
      pageSize: 10,
      page:1
    };
  }

  handleInputChange = (e) => {
    this.setState({ category: e.target.value });
  }

  handleClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=190b4d27c9884c30976a3124fd041cbf&page=1&pageSize=${this.state.pageSize}`;
    let data = await fetch(url)
    let parsedData = await data.json();

    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }

  handlePrevClick = async () => {
    console.log('prev button')
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=190b4d27c9884c30976a3124fd041cbf&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {
    }else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=190b4d27c9884c30976a3124fd041cbf&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
      let data = await fetch(url)
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  gotoAbout = () => {
    let aboutTag = document.querySelector('#about');
    aboutTag.click()
  }

  gotoProject = () => {
    let aboutTag = document.querySelector('#project');
    aboutTag.click()
  }

  render() {
    return (
      <>
      <Navbar onclickProject={this.gotoProject} onclickAbout={this.gotoAbout} loading={this.state.loading} onhandleClick={this.handleClick} onInputChange={this.handleInputChange}/>
      <Hero/>
      <News onhandleNextClick={this.handleNextClick} onhandlePrevClick={this.handlePrevClick} articles={this.state.articles} pageSize={10} country={'in'} category={this.state.category} />
      <hr/>
      <About/>
      <Projects/>
      <Social/>
      </>
    )
  }
}

// my api key

// 190b4d27c9884c30976a3124fd041cbf

