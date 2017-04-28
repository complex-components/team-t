import React, { Component } from 'react';

export default class Comment extends Component {
    render(){
        return (
            <div style={{"marginBottom":"1rem", "flexDirection":"column"}}>
                <div style={{"flexDirection":"row"}}>
                    <span style={{"color":"#8E7FAE"}}>{this.props.comment.author}</span>
                    <span style={{"color":"#75787B", "fontSize": "0.75rem", "marginLeft": "10px"}}>
                        {
                            new Date(this.props.comment.timestamp).toLocaleString()
                        }
                    </span>
                </div>
                <div style={{"color":"#75787B", "fontSize":"1.4rem"}}>{this.props.comment.content}</div>
            </div>
        )
    }
}