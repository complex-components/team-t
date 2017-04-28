import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import './component.css';

class FantasticComponent extends Component {
    style = {
        "display": "flex",
        "flexDirection": "column",
        "flexWrap": "nowrap",
        "textAlign": "left"
    }
  render() {
    return (
      <div style={this.style}>
          {
            this.props.comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} user={this.props.user} comments={this.props.comments} addComment={this.props.addComment} />
            })
          }
          <AddComment comments={this.props.comments}
                      user={this.props.user}
                      parentComment={null}
                      addComment={this.props.addComment} />
      </div>
    );
  }
}



export default FantasticComponent;
