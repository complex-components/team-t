import React, { Component } from 'react';

export default class Comment extends Component {
    render(){
        return (
            <div style={{"marginBottom":"1rem", "flexDirection":"column"}}>
                <div style={{"color":"#8E7FAE"}}>{this.props.comment.author}</div>
                <div style={{"color":"#75787B", "fontSize":"1.4rem"}}>{this.props.comment.content}</div>
            </div>
        )
    }
}