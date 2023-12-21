/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';

function Header(props) {
  return <header>
    <h1><a 
    // href='/'
     onClick={(e) => {
      props.onChangeMode(e.target)
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a 
      // href={`/read/${t.id}`}
        id={t.id}
        onClick={(e) => {
        props.onChangeMode(e.target.id)
      }}>
        {t.title}
        </a>
      </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>Welcome</h2>
    {props.title}
    {props.body}
  </article>
}

function App() {
  const [mode, setMode] = useState("WELCOME")

  let content;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello body welcome"></Article>
  } else if (mode === "READ") {
    content = <Article title="Read" body="Hello body read"></Article>
  }
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'js', body: 'js is ...' },
    { id: 3, title: 'css', body: 'css is ...' },
  ]
  return (
    <div>
      <Header title="타이틀1" onChangeMode={() => {
        setMode("WELCOME")
        alert(`change WELCOME`)
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        setMode("READ")
        alert(`${id} change READ`)
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
