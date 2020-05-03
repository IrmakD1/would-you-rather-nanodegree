import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from '../pages/Home'
import NewQuestion from '../pages/New-question'
import Leaderboard from '../pages/Leader-board'
import QuestionPage from '../pages/QuestionPage'
import './App.css';

class App extends Component {
  
  //Can I move this into the store?
  pages = [
    { name: 'Home', root: '/', id: 1 },
    { name: 'New Question', root: '/add', id: 2 },
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
          <Route path='/add' render={() => (
            <NewQuestion 
              pageTitle='New Question'
              pages={this.pages}/>
            )}/>
          <Route path="/questions/:id" render={(props) => (
              <QuestionPage {...props} pages={this.pages}/>
          )} />
          </div>
      </Router>
    )
  }
}

function mapStateToProps (questions) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(App)
