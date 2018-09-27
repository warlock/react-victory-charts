import React, { Component } from 'react'
import { VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryAxis } from 'victory'

export default class LineClassic extends Component {
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
              dependentAxis
              tickFormat={(y) => parseInt(y, 0).toString()}
            />
            <VictoryAxis
              tickValues={this.state.data.map(x => x.x)}
            />
          <VictoryLine
            style={styles.line}
          />
          <VictoryScatter 
          
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
  }
}