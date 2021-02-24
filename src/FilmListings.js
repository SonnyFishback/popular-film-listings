
import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListings extends Component {
  constructor(props) {
    super()

    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick(filter) {
    this.setState({
      filter: filter
    })
  }

  render() {
    const filmsArray = this.state.filter === 'all' ? this.props.films : this.props.faves

    const allFilms = filmsArray.map(film => {
      return <FilmRow
        key={film.id}
        film={film}
        onFaveToggle={() => this.props.onFaveToggle(film)}
        isFave={this.props.faves.includes(film)}
        handleDetailsClick={() => this.props.handleDetailsClick(film)} />
    })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
                <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
                <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    )
  }
}

export default FilmListings
