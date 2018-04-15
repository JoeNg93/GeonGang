import React from 'react';
import colorCode from '../../utils/colorCode';
import { VictoryLine, VictoryTheme, VictoryAxis } from 'victory-native';

const graphWidth = 241;
const graphHeight = 73;
const graphData = [
  { x: 10, y: 26 },
  { x: 20, y: 36 },
  { x: 30, y: 56 },
  { x: 40, y: 46 },
  { x: 50, y: 76 }
];

const Graph = () => {
  return (
    <svg width={graphWidth} height={graphHeight}>
      <VictoryAxis
        width={graphWidth}
        height={graphHeight}
        domain={[0, 60]}
        theme={VictoryTheme.material}
        standalone={false}
        tickValues={[0, 10, 20, 30, 40, 50, 60]}
        tickFormat={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        style={{
          axis: { stroke: colorCode.lightBlue, strokeWidth: 3 },
          grid: { stroke: colorCode.lightBlue },
          ticks: { size: 0 },
          tickLabels: { fontSize: 12 }
        }}
      />
      <VictoryLine
        style={{
          data: { stroke: colorCode.lightBlue, strokeWidth: 4 }
        }}
        data={graphData}
        interpolation="natural"
        width={graphWidth}
        height={graphHeight}
        standalone={false}
      />
      <VictoryAxis
        dependentAxis
        width={graphWidth}
        height={graphHeight}
        domain={[0, 100]}
        theme={VictoryTheme.material}
        style={{
          axis: { stroke: 'none' },
          grid: { stroke: colorCode.lightBlue },
          ticks: { size: 0 },
          tickLabels: { fontSize: 0 }
        }}
        tickValues={[25, 50, 75, 100]}
        standalone={false}
      />
    </svg>
  );
};

export default Graph;
