import React, { Component } from 'react';

export default class AddComment extends Component {
    render() {
        return(
           <form>
               <label>Enter comment: </label>
               <input type="text" />
               <button type="submit">Comment!</button>
           </form>
        )
    }
}