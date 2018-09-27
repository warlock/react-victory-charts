import React, { Component } from 'react'
import { VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryLabel, VictoryAxis } from 'victory'



export default class Line extends Component {
  constructor () {
    super()
    this.state = {
      data: [
        { x: "A", y: 5 },
        { x: "B", y: 10 },
        { x: "C", y: 7 },
        { x: "D", y: 3 }
      ]
    }
  }

  render () {
    return (
      <VictoryChart>
        <VictoryAxis/>

        <VictoryGroup data={this.state.data}>
          <VictoryLine 
           labels={(d) => d.y}
           style={{ labels: { fill: "red" } }}
           labelComponent={<VictoryLabel dy={30}/>}
           
          />
          <VictoryScatter />
        </VictoryGroup>
      </VictoryChart>
    )
  }
}