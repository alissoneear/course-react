import React from 'react';
import './Chart.css';
import { ChartBar } from './ChartBar'

export const Chart = (props) => {
    return <div className='chart'>
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                label={dataPoint.label}
                value={dataPoint.value}
                maxValue={null}
            />
        )}
    </div>
};