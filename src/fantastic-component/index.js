import React, { Component } from 'react';
import Comment from './Comment';
import './component.css';

class FantasticComponent extends Component {
    style = {
        "display": "flex",
        "justifyContent": "center",
        "backgroundColor": "red",
        "width": "200px",
        "border": "solid 1px black",
        "borderRadius": "10px"
    }
  render() {
    return (
      <div style={this.style}>
          {this.props.comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />
      })}
          {/*<AddComment />/*/}
      </div>
    );
  }
}



export default FantasticComponent;
