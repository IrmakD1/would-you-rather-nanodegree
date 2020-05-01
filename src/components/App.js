import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Home from '../pages/Home'
import NewQuestion from '../pages/New-question'
import Leaderboard from '../pages/Leader-board'
import './App.css';

class App extends Component {
  
  //Can I move this into the store?
  pages = [
    { name: 'Home', root: '/', id: 1 },
    { name: 'New Question', root: '/new', id: 2 },
    { name: 'Leader Board', root: '/leaderboard', id: 3 },
  ]

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return(
      <Router>
           <div className='header'>
             <h2>Would You Rather..?</h2>
           </div>
          <div className='container'>
           <Route exact path='/' render={() => (
              <Home 
                pageTitle='Home'
                pages={this.pages}/>
            )}/>
          <Route path='/leaderboard' render={() => (
              <Leaderboard 
                pageTitle='Leader Board'
                pages={this.pages}/>
            )}/>
          <Route path='/new' render={() => (
            <NewQuestion 
              pageTitle='New Question'
              pages={this.pages}/>
            )}/>
          </div>
      </Router>
    )
  }
}

// function mapStateToProps ({ authedUser }) {
//   return {
//     loading: authedUser === null
//   }
// }

export default connect()(App)
