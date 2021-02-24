import React from 'react';

function FilmPoster(props) {
  let posterUrl = 'https://image.tmdb.org/t/p/w780/'

  return (
    <img src={posterUrl + props.filmLink} alt="" />
  )
}

export default FilmPoster