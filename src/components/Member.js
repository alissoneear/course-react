import React,{Component} from "react";

export default class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 1,
            statusbool: false
        };
    }
    
    render() { 
        return (
            <div>
                {this.state.status === 1 &&
                    <h1>Welcome to the WebSite!</h1>
                }
                {this.state.statusbool ?
                    <div>
                        <h2>If the statusbool is true</h2>
                    </div> :
                    <div>
                        <h2>If the statusbool is false</h2>
                    </div>
                }
            </div>
        );
    }
}