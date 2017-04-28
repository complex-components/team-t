import React, { Component } from 'react';

export default class Comment extends Component {
    render(){
        return (
            <div style={{"marginBottom":"1rem", "flexDirection":"column"}}>
                <div style={{"width":"100%", "color":"rgba(0, 0, 0, .40)", "fontSize":"0.7rem"}}>{this.props.comment.author}</div>
                <div>{this.props.comment.content}</div>
            </div>
        )
    }
}