import React, { Component } from 'react'
import { VictoryPie } from 'victory'

export default class Pie extends Component {
  constructor () {
    super()
    this.state = {
      data: [
        { x: "A", y: 35 },
        { x: "B", y: 40 },
        { x: "C", y: 55 },
        { x: "D", y: 55 }
      ]
    }
  }

  render () {
    return (
      <VictoryPie
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        data={this.state.data}
      />
    )
  }
}