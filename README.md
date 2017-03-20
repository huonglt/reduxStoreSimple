## About this app

This is to demonstrate all the concepts of redux store. All in simple code. Pure & stateless functions. Write your own. No external dependencies except for babel to transpile to node js. It runs in node environment

## What is a redux store?
- A store in redux is to manage the state of your application. There is only one single instance of the store object through out the app. The store object is simple an object with 2 methods:
  - getState(): return the state of the store
  - dispatch(action): dispatch the action to the store, so it can change the state accordingly
  - the store execute the reducers when it receives an action

- reducers: is a function with arguments of action and state. It contains logic to handle the action, and return the new state. It does not modify any of the inputs

- action object: is a plain object, has fields: type as the name of the action, and payload to carry data to required to perform the action

- applyMiddleware: is a function accepting an array of reducers. This function return a reducer. Any action dispatched to the store will be executed with this reducer first prior to the main reducers of the store

- createStore(reducers, [initialState], [middleWare]): is a function to create a store object. It takes input of:
  - reducers: handle state logic according to action. This is required
  - initialState: the initial state you want to set for the store. Optional
  - middleWare: any middleware being use. If you want to apply multiple middlewares, use applyMiddleware function and specify the name of the middleWare. The order of the middleware to be executed would be from right most to left most

## What does this app do?
- This app is using a simple & popular example: INCREMENT and DECREMENT a counter.
- This app creates a store, which state has a counter field
- The INCREMENT action will increase value of the counter by 1
- The DECREMENT action will decrease value of the counter by 1
- The store has 2 logging middlewares which simple just logging the action, and state of the store

## Prerequisite
  node & yarn preinstalled

  - brew install node
  - brew install yarn

  I'm using node v7.5.0, yarn v0.20.3

## Install dependencies before you start
  yarn install

## To start
  yarn start

## Things I learnt
- using ES6 features
- using pure functions
