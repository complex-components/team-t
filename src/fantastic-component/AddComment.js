import React, { Component } from 'react';

export default class AddComment extends Component {
    render() {
        return(
           <form>
               <div style={{"flexDirection":"column"}}>
                    <textarea rows="4" cols="50" style={{"display":"block", "marginBottom":"0.5rem"}}/>
                    <button type="submit">Legg til kommentar</button>
               </div>
           </form>
        )
    }
}