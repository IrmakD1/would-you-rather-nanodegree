This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Would You Rather Project

This provides users with the ability to log into the app and submit new or vote on existing 'would you rather' questions.

## Project Setup
This project is easy to set up and get going. Simply git clone the repo into your desired folder and then run 'npm i' to install all the dependencies.

You can run the app with: 'npm run start'

## Logging in

This app mocks a login. Users will have to provide one of the 3 existing usernames in order to log in. these include:
    - johndoe
    - sarahedo
    - tylermcginnis

## What you are getting
```bash
├── README.md - This file.
├── package.json
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── actions #folder for all actions
        ├── authedUser.js #sets the authedUser action
        ├── homeState.js #sets the state of the home page used to show which questions are answered or unanswered
        ├── questions.js #actions for getting the, saving or voting on questions
        ├── shared.js #shared actions for fetching the initial data
        └── users.js #actions for fetching the users
    ├── components #all the lower level components that are used in the pages
        ├── form #file for all the components that make up the nav panel
            ├── Button.css
            ├── Button.js
            ├── ButtonGroup.css
            ├── ButtonGroup.js
            └── index.js
        ├── App.css
        ├── App.js
        ├── LeaderBoardList.css
        ├── LeaderBoardList.js
        ├── LoginForm.css
        ├── LoginForm.js     
        ├── NavigationPanel.css
        ├── NavigationPanel.js   
        ├── NoMatch.js
        ├── Question.css
        ├── Question.js
        ├── QuestionDetials.css
        ├── QuestionDetials.js
        ├── UserAvatar.css
        └── UserAvatar.js
    ├── middleware 
        ├── index.js
        └── logger.js
    ├── pages # the high level container components for each of the app pages
        ├── Home.css
        ├── Home.js
        ├── Leader-Board.css
        ├── Leader-Board.js
        ├── New-question.css
        ├── New-question.js     
        ├── QuestionPage.css
        └── QuestionPage.js   
    ├── reducers
        ├── authedUser.js
        ├── homeState.js
        ├── index.js
        ├── question.js     
        └── users.js  
    ├── utils
        └── index.js #shared functions used throughout the app
    ├── _DATA.js
    ├── index.css
    ├── index.js