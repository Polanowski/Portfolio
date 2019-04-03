import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>   
  )
}

const Library = () => {
  return (
    <div>
      Welcome to the Library
    </div>
  )
}

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Experience</li>
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<Navigation/>, document.getElementById('nav')
)

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.msg}</h1>
      </div>
    ) 
  }
}

ReactDOM.render(<Message msg="how are you?"/>, document.getElementById('root')
)
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
