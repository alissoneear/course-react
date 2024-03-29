import React from 'react';
import './Chart.css';
import { ChartBar } from './ChartBar'

export const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(x => x.value);
    const totalMaximum = Math.max(...dataPointValues);
    return <div className='chart'>
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                label={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
            />
        )}
    </div>
};