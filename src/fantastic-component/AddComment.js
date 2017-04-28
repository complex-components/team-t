import React, { Component } from 'react';

export default class AddComment extends Component {

    buttonStyle = {
        "color": "#fff",
        "backgroundColor": "#009681",
        "border": "none",
        "padding": "8px 15px"
    }

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
}
    render() {
        return(
           <form onSubmit={this.onSubmit}>
               <div style={{"flexDirection":"column"}}>
                    <textarea rows="4" value={this.state.value} onChange={this.handleComment} style={{ 
                        "display":"block",
                        "margin":"0.5rem 0", 
                        "borderRadius":"12px", 
                        "fontSize": "1.4rem",
                        "padding": "0.7rem",
                        "minWidth": "385px" }} />
                    <button type="submit" style={this.buttonStyle}>Legg til kommentar</button>
               </div>
           </form>
        )
    }

    handleComment = (e) => {
        this.setState({ value: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        let comment = {
            id: this.props.comments.length + 1,
            author: this.props.user.displayName,
            parentComment: this.props.parentComment,
            content: this.state.value,
            timestamp: Date.now()
        }

        if (comment.content.length > 0) {
            this.props.addComment(comment)
            this.setState({ value: '' })
        }
    }
}