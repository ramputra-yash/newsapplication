import React, { Component } from "react";

export class NewsItem extends Component {

  render() {

    let {title, description,image, newsUrl} = this.props;

    return (
      <>
        <div  className="card" style={{width:'18rem',gridRowEnd:'span 33'}}>
          <img src={image}  className="card-img-top" alt="..." />
          <div  className="card-body">
            <h5  className="card-title">{title}</h5>
            <p  className="card-text">
              {description}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
