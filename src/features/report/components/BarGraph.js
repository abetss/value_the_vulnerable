import React from 'react';

import '../../../../node_modules/react-vis/dist/style.css';
import {
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  LabelSeries,
  FlexibleWidthXYPlot
} from 'react-vis';

export const BarGraph = ({ data, labelData, width = 760, height = 300, xDistance = 100, color = '#6a1b9a' }) => (
  <FlexibleWidthXYPlot xType="ordinal" height={height}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis
      style={{
        line: { stroke: '#ADDDE1' },
        ticks: { stroke: '#ADDDE1' },
        text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, fontSize: 16 }
      }}
    />
    <YAxis
      style={{
        line: { stroke: '#ADDDE1' },
        ticks: { stroke: '#ADDDE1' },
        text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, fontSize: 16 }
      }}
    />
    <VerticalBarSeries data={data} color={color} />
    <LabelSeries data={labelData} />
  </FlexibleWidthXYPlot>
);
