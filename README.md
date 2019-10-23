## Simple app to fetch and present fetched API data with caching feature

### Technologies used
- create-react-app to scaffold the app
- React
- TypeScript
- Redux
- redux-saga for async side effects
- react-router-dom

### How to run the app?
- Clone the repo to desired directory or download the .zip version
- open cmd && cd to directory
- npm i
- npm start

### About the app
Project was scaffolded with create-react-app which comes with preconfigured webpack, babel, TypeScript support and other goodies. For state management purposes I used Redux, combined with redux-saga middleware to handle side-effects (fetching API data). 
Redux-saga comes up with interesting mental model of handling async actions with ES6 generators. Basically it means that async flow consist of starting, pausing and watching for actions related behaviour. 

- /components - building blocks of Application
- /pages - every route has its file/component which is then presented on given url
- /store - state managment code
- /utils - utility files



