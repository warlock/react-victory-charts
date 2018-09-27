import React, { Component } from 'react'
import Bars from './charts/Bars'
import Pie from './charts/Pie'
import Line from './charts/Line'
import LineClassic from './charts/LineClassic'
import LineBestScatter from './charts/LineBestScatter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.block}>
          <Bars />
        </div>
        <div style={styles.block}>
          <Pie />
        </div>
        <div style={styles.block}>
          <Line />
        </div>
        <div style={styles.block}>
          <LineClassic />
        </div>
        <div style={styles.block}>
          <LineBestScatter />
        </div>
      </div>
    )
  }
}

const styles = {
  block: {
    width: '25%'
  }
}

export default App
