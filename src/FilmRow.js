import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
  constructor(props) {
    super()
  }

  render() {
    let date = new Date(this.props.film.release_date)

    return (
      <div className="film-row" onClick={() => this.props.handleDetailsClick(this.props.film)}>
        <FilmPoster filmLink={this.props.film.poster_path} />

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{date.getFullYear()}</p>
        </div>
        <Fave
          onFaveToggle={this.props.onFaveToggle}
          isFave={this.props.isFave}
        />
      </div>
    )
  }
}

export default FilmRow