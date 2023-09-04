import React from 'react';
import ReactDOM from 'react-dom/client';
import CarFounction from './Car.js';

// const helloElement = <h1>Hello react!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));

const x = 5;
let text = "Goodbye";
if(x < 10 ){
  text = "Hello";
}

// const myElement = <h1>{text}</h1>
const myElement = <h1>{(x) < 10 ? "hello":"Goodbye"}</h1>

// react components: class component and founction component
class Car extends React.Component {
  render() {
    return <h2>Hi,I am a Car!</h2>
  }
}

function Garage() {
  return (
    <>
      <h1>what is in the Garage?</h1>
      <CarFounction/>
    </>
  )
}
root.render(<Garage/>);