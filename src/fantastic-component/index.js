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
              return <Comment key={comment.id} comment={comment} />
            })
          }
          <AddComment />
      </div>
    );
  }
}



export default FantasticComponent;
