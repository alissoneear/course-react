import React from 'react';
import { Chart } from '../Chart/Chart';

export const ExpensesChartYears = (props) => {
    const chartDataPoints = [
        { label: "2019", value: 0 },
        { label: "2020", value: 0 },
        { label: "2021", value: 0 },
        { label: "2022", value: 0 },
        { label: "2023", value: 0 },
    ];
    for (const expense of props.expenses) {
        switch (expense.date.getFullYear()) {
            case 2019:
                chartDataPoints[0].value += expense.amount;
                break;
            case 2020:
                chartDataPoints[1].value += expense.amount;
                break;
            case 2021:
                chartDataPoints[2].value += expense.amount;
                break;
            case 2022:
                chartDataPoints[3].value += expense.amount;
                break;
            case 2023:
                chartDataPoints[4].value += expense.amount;
                break;
            default: break;
        }
    }
    return <Chart dataPoints={chartDataPoints} />
}