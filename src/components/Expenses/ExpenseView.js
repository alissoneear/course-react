import React, { useState } from 'react';
import "./ExpenseView.css";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from './ExpensesList';

export const ExpenseView = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}