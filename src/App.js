import React, { Component } from 'react'
import FantasticComponent from './fantastic-component'
import PropTypes from 'prop-types'
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
        let index = 0;
        if(comment.parentComment != null) { index = comment.id + 2 }
        else index = this.state.comments.length
        let preSplice = this.state.comments
        preSplice.splice(index, 0, comment)
        console.log(preSplice)
        this.setState({
            preSplice
        })
  }
}

App.propTypes = {
    user: PropTypes.object,
    comments: PropTypes.array
}

export default App
