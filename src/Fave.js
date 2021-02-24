import React, { Component } from 'react';

class Fave extends Component {
  constructor(props) {
    super()
  }

  handleClick(e) {
    e.stopPropagation()
    console.log('Handling Fave click!')

    // Add this line. You'll call the function passed through props
    this.props.onFaveToggle()

    // Delete the `setState` line. You no longer track state here
    // this.setState({isFave: !this.state.isFave})
  }

  render() {
    const isFaveClass = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'

    return (
      <div onClick={(e) => this.handleClick(e)} className={`film-row-fave ${isFaveClass}`} >
        <p className="material-icons">{isFaveClass}</p>
      </div>
    )
  }
}

export default Fave