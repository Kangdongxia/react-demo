import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// function formatName(user){
//   return user.firstName + ' ' + user.lastName;
// }
// const user = {
//   firstName:'111',
//   lastName:'888888'
// }
// const name = 'Josh Perez';
// const element = <h1>Hello,{formatName(user)}!</h1>;
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// const element = <Welcome name="Sara" />;
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  // <React.StrictMode>
  //    <App /> 
  // </React.StrictMode>,
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
