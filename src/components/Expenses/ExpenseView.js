import React, { useState } from 'react';
import "./ExpenseView.css";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from './ExpensesList';
import { ExpensesChart } from './ExpensesChart';
import { ExpensesChartYears } from './ExpensesChartYears';

export const ExpenseView = (props) => {
    const [filteredYear, setFilteredYear] = useState("all");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    const selectedAllYearsOrNot = () => {
        if (filteredYear === "all") {
            return (
                <div>
                    <ExpensesChartYears expenses={props.items} />
                    <ExpensesList items={props.items} />
                </div>
            )
        } else {
            return (
                <div>
                    <ExpensesChart expenses={filteredExpenses} />
                    <ExpensesList items={filteredExpenses} />
                </div>
            )
        }
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {selectedAllYearsOrNot()}
        </Card>
    );
}