import React, { Component } from 'react';

export default class FeedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed:[
                {id:1, username:"Alisson", likes:15, comments:3},
                {id:2, username:"Henrique", likes:50, comments:1},
                {id:3, username:"Kevin", likes:1500, comments:30}
            ]
        };
    }
    render() {
        return (
            <div>
                
                {this.state.feed.map((item)=>{
                    return(
                        <div key={item.id}>
                            <h3>{item.username}</h3>
                            <a>{item.likes} likes / {item.comments} comments</a>
                        </div>
                    )
                })}
            </div>
        );
    }
}