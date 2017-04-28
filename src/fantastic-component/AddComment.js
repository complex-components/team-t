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
                    <textarea rows="4" style={{ "display":"block", 
                        "marginBottom":"0.5rem", 
                        "borderRadius":"12px", 
                        "fontSize": "1.4rem",
                        "padding": "0.7rem",
                        "minWidth": "385px" }} />
                    <button type="submit" style={this.buttonStyle}>Legg til kommentar</button>
               </div>
           </form>
        )
    }
}