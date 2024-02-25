import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=190b4d27c9884c30976a3124fd041cbf&page=1&pageSize=${this.props.pageSize}`;
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

    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrevClick = async () => {
    console.log('prev button')
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=190b4d27c9884c30976a3124fd041cbf&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

    }else {
      console.log('next button')
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=190b4d27c9884c30976a3124fd041cbf&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url)
      let parsedData = await data.json();
      console.log(parsedData)
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  render() {

    return (
      <>
      <h1 className='head1'>Top Headlines</h1>
      {
        (this.props.articles.length === 0) ? 
        (
          <div className='container'>
          <h1 className='head2'>Top Headlines</h1>
            {

              this.state.articles.map((element) => {
                return (
                  <NewsItem
                  image={element.urlToImage?element.urlToImage:'https://i.pinimg.com/564x/e0/b1/a2/e0b1a2712b8a6bfad41e69a002dcec76.jpg'}
                  title={element.title?element.title:''}
                  description={element.description?element.description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, exercitationem commodi.'}
                  key={element.url}
                  newsUrl={element.url}
                  />
                )
              })
            }
          </div>

        ) : 
        (
          <div className='container'>
          <h1 className='head2'>Top Headlines</h1>
            {

              this.props.articles.map((element) => {
                return (
                  <NewsItem
                  image={element.urlToImage?element.urlToImage:'https://i.pinimg.com/564x/e0/b1/a2/e0b1a2712b8a6bfad41e69a002dcec76.jpg'}
                  title={element.title?element.title:''}
                  description={element.description?element.description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, exercitationem commodi.'}
                  key={element.url}
                  newsUrl={element.url}
                  />
                )
              })
            }
          </div>
        )
      }

      <div className='pagination'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.props.onhandlePrevClick}>&larr; Previous</button>
        <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize) < this.state.page + 1} type="button" className="btn btn-primary" onClick={this.props.onhandleNextClick}>Next &rarr;</button>
      </div>
      </>
    )
  }
}

export default News
