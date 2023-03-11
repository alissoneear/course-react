import React, { Component } from "react";
import IncreaseDecreaseButton from "./components/IncreaseDecreaseButton";
import CycleLife from "./components/CycleLife";
import Member from "./components/Member";
import FeedList from "./components/FeedList";
import ExpenseItem from "./components/ExpenseItem";

export default class App extends Component {
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
                <ExpenseItem />
            </div>
        );
    }
}