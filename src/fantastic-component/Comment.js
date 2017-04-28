import React, { Component } from 'react';

export default class Comment extends Component {
    render(){
        return(
            <div>
                <p>Author: {this.props.comment.author}</p>
                <p>Comment: {this.props.comment.content}</p>
            </div>
        )
    }
}