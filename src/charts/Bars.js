import React, { Component } from 'react'
import { VictoryBar, VictoryTheme, VictoryAxis, VictoryChart } from 'victory'

export default class Bars extends Component {

  constructor () {
    super()
    this.state = {
      data: [
        { dimension: 1, size: 20 },
        { dimension: 2, size: 30 },
        { dimension: 3, size: 40 },
        { dimension: 4, size: 23 }
      ]
    } 
  }

  render() {
    const colors = [
      'yellow',
      'green',
      'red',
      'blue'
    ]

    return (
     <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["A", "B", "C", "D"]}
        />
        <VictoryAxis
          dependentAxis
        />
        <VictoryBar
          style={{
            data: {
              fill: (d) => colors[d.eventKey],
              stroke: (d) => colors[d.eventKey],
              fillOpacity: 0.7,
              strokeWidth: 3
            },
            labels: {
              fontSize: 15
            }
          }}
          data={this.state.data}
          x="dimension"
          y="size"
        />
      </VictoryChart>
    )
  }
}


