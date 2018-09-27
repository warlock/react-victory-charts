import React, { Component } from 'react'
import { VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryAxis } from 'victory'

export default class LineBestScatter extends Component {
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
        <VictoryGroup
          data={this.state.data}
        >
            <VictoryAxis
              tickValues={this.state.data.map(x => x.x)}
            />
          <VictoryLine
            style={styles.line}
          />
          <VictoryScatter
            style={styles.scatter}
            size={9}
            labels={(datum) => datum.y}
          />
        </VictoryGroup>
      </VictoryChart>
    )
  }
}

const styles = {
  line: { 
    data: {
      stroke: "#c43a31",
      strokeWidth: 10,
      strokeLinecap: "round"
    }
  },
  scatter: {
    parent: {
      border: "1px solid #ccc"
    },
    data: {
      fill: "#c43a31", strokeWidth: 3
      //fill: "#c43a31", fillOpacity: 0.6, stroke: "#c43a31", strokeWidth: 3
    },
    labels: {
      fontSize: 15, fill: "#c43a31", padding: 15
    }
  }
}