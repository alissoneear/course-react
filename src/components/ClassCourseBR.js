import React, { Component } from "react";
import IncreaseDecreaseButton from "./BRCourse/IncreaseDecreaseButton";
import CycleLife from "./BRCourse/CycleLife";
import Member from "./BRCourse/Member";
import FeedList from "./BRCourse/FeedList";

export default class ClassCourseBR extends Component {
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
            </div>
        );
    }
}