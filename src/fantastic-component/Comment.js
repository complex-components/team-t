import React, { Component } from 'react';
import AddComment from './AddComment';

export default class Comment extends Component {
    style = {"marginBottom":"1rem", "flexDirection":"column"}
    replyVisible = {"display":"none"}
    replyHidden = {"display":"inherit"}
    state = {
        displaying: false
    }

    render(){
        if (this.props.comment.parentComment != undefined){
            this.style = {
                ...this.style,
                "marginLeft": "2rem"
            }
        }
        return (
            <div style={this.style}>
                <div style={{"flexDirection":"row"}}>
                    <span style={{"color":"#8E7FAE"}}>{this.props.comment.author}</span>
                    <span style={{"color":"#75787B", "fontSize": "0.75rem", "marginLeft": "10px"}}>
                        {
                            new Date(this.props.comment.timestamp).toLocaleString()
                        }
                    </span>
                </div>
                <div style={{"color":"#75787B", "fontSize":"1.4rem"}}>{this.props.comment.content}</div>
                <a href="#" style={{"fontSize":"0.75rem", "color":"#8E7FAE"}} onClick={this.toggleReply}>Svar</a>
                <div style={this.state.displaying ? this.replyHidden : this.replyVisible}>
                    <AddComment user={this.props.user}
                                comments={this.props.comments}
                                parentComment={this.props.comment.id}
                                addComment={this.props.addComment} />
                </div>
            </div>
        )
    }

    toggleReply = () => {
        this.setState({
            displaying: !this.state.displaying
        })
    }
}