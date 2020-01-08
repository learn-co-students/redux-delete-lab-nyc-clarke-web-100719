import React, { Component } from 'react';

class Band extends Component {
  
  handleClick = e => {

    e.preventDefault();
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    debugger
    return(
      <li>
        {this.props.band.name}
        <button onClick={(e) => this.handleClick(e)}>Delete</button>
      </li>
    );
  }
};

export default Band;
