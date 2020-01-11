import React, { Component } from 'react'


export class Screen extends Component {
  render() {
    const { results } = this.props
    return (
      <div className='screen' >
          {results}
      </div>
    )
  }
}

export default Screen
