import * as React from 'react';
import './style.css';

export default function App() {
  const foo =(hello)=>{
    return hello('vishnu')
  }

  const user = foo((name)=>{
    return `Hello ${name}`.toUpperCase()
  })
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>{user}</p>
    </div>
  );
}
