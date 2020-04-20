import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Login from '../pages/Login'
import Home from '../pages/Home'
import NewQuestion from '../pages/New-question'
import Leaderboard from '../pages/Leader-board'
import './App.css';

class App extends Component {
  
  //Can I move this into the store?
  //pages = ['Login', 'Home', 'New Question', 'Leader Board']
  pages = [
    { name: 'Login', root: '/' , id: 1 },
    { name: 'Home', root: '/home', id: 2 },
    { name: 'New Question', root: '/new', id: 3 },
    { name: 'Leader Board', root: '/leaderboard', id: 4 },
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
              <Login 
                pageTitle='Login'
                pages={this.pages}/>
            )}/>
           <Route path='/home' render={() => (
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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
