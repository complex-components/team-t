import React, { Component } from 'react';

export default class AddComment extends Component {

    buttonStyle = {
        "color": "#fff",
        "backgroundColor": "#009681",
        "border": "none",
        "padding": "8px 15px"
    }

    render() {
        return(
           <form>
               <div style={{"flexDirection":"column"}}>
                    <textarea rows="4" cols="50" style={{"display":"block", "marginBottom":"0.5rem"}}/>
                    <button type="submit" style={this.buttonStyle}>Legg til kommentar</button>
               </div>
           </form>
        )
    }
}