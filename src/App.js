import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListings from './FilmListings.js';
import TMDB from './TMDB.js';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleDetailsClick(film) {
    this.setState({
      current: film
    })
  }

  handleFaveToggle(film) {
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)

    if (filmIndex === -1) {
      faves.push(film)
      console.log(`Adding ${film.title} to faves...`)
    } else {
      faves.splice(filmIndex, 1)
      console.log(`Removing ${film.title} from faves...`)
    }
    this.setState({ faves })

  }

  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListings
            films={TMDB.films}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
            handleDetailsClick={this.handleDetailsClick}
          />
          <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;