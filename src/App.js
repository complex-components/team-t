import React, { Component } from 'react'
import FantasticComponent from './fantastic-component'
import logo from './logo.svg'
import './App.css'





class App extends Component {
    state = {
        user: {
            id: 1,
            displayName: "Test Testesen"
        },

        comments: [
            {
                id: 1,
                author: "Test Testesen",
                parentComment: null,
                content: "La di da di da",
                timestamp: Date.now()
            },
            {
                id: 2,
                author: "Test Testesen",
                parentComment: 1,
                content: "Næhæi!",
                timestamp: Date.now()
            }
        ]
    }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Team T!</h2>
        </div>
        <div className='component-test'>
          <FantasticComponent user={this.state.user} comments={this.state.comments} addComment={this.addComment}/>
        </div>
      </div>
    )
  }

  addComment = (comment) => {
        let comments = this.state.comments.concat([comment])
        this.setState({
            comments
        })
        comment = ''
  }
}

export default App
