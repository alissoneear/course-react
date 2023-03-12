import React, { Component } from "react";
import IncreaseDecreaseButton from "./components/BRCourse/IncreaseDecreaseButton";
import CycleLife from "./components/BRCourse/CycleLife";
import Member from "./components/BRCourse/Member";
import FeedList from "./components/BRCourse/FeedList";
import ExpenseItem from "./components/ExpenseItem";

export default class App extends Component {
    state = {
        expenses: [
            {
                id: 'e1',
                title: 'Toilet Paper',
                amount: 94.12,
                date: new Date(2020, 7, 14),
            },
            {
                id: 'e2',
                title: 'New TV',
                amount: 799.49,
                date: new Date(2021, 2, 12),
            },
            {
                id: 'e3',
                title: 'Car Insurance',
                amount: 294.67,
                date: new Date(2021, 2, 28),
            },
            {
                id: 'e4',
                title: 'New Desk (Wooden)',
                amount: 450,
                date: new Date(2021, 5, 12),
            },
        ]
    }
    render() {
        return (
            <div>
                <IncreaseDecreaseButton />
                <hr />
                <CycleLife />
                <hr />
                <Member />
                <hr />
                <FeedList />
                <hr />
                <ExpenseItem
                    title={this.state.expenses[0].title}
                    amount={this.state.expenses[0].amount}
                    date={this.state.expenses[0].date}
                />
                <ExpenseItem
                    title={this.state.expenses[1].title}
                    amount={this.state.expenses[1].amount}
                    date={this.state.expenses[1].date}
                />
                <ExpenseItem
                    title={this.state.expenses[2].title}
                    amount={this.state.expenses[2].amount}
                    date={this.state.expenses[2].date}
                />
                <ExpenseItem
                    title={this.state.expenses[3].title}
                    amount={this.state.expenses[3].amount}
                    date={this.state.expenses[3].date}
                />
            </div>
        );
    }
}