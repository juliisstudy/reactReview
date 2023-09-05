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
/*
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color : "red"};
  }

  render() {
    return <h2>Hi,I am {this.state.color} a Car!</h2>
  }
}*/

// component properties by using props
class Car extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      brand: 'ford',
      color: 'red'
    }
  }
  //to change a value in the state object, use the this.setState()
  changeColor = () => {
    this.setState({color: "blue"});
  }

  render() {
    return (
      <div>
        <h2>Hi,I am {this.state.color} a Car!</h2>
        <button type = "button" onClick={this.changeColor}>change color</button>
      </div>
    )
  }
}


function Garage() {
  return (
    <>
      <h1>what is in the Garage?</h1>
      <Car color = "red"/>
    </>
  )
}

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {favoritecolor:"red"};
  }
  /*
  static getDerivedStateFromProps(props,state) {
    return {favoritecolor: props.favcol};
  }
*/
  //componentDidMount() is called after the component is rendered.
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    },1000)
  }
  getSnapshotBeforeUpdate(prevProps,prevState) {
    document.getElementById("div1").innerHTML = 
    "Before the update, the favorite was " + prevState.favoritecolor;
  }

  componentDidUpdate() {
    document.getElementById("div2").innerHTML = 
    "The updated favorite is " + this.state.favoritecolor;
  }

  //shouldComponentUpdate method you can return a Boolean value that specifies whether React should continue with the rendering or not.
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
      <h1>My favorite color is {this.state.favoritecolor}</h1>
      <div id = "div1"></div>
      <div id = "div2"></div>
      </div>
    )
  }
}


//Unmounting
// when a component is removed from the DOM
class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if(this.state.show) {
      myheader = <Child/>
    };
    return (
      <div>
        {myheader}
        <button type = "button" onClick={this.delHeader}>Delete Header</button>
      </div>
    )
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The compnent named Header is about to be unmounted");
  }
  render() {
    return (
      <h1>Hello</h1>
    )
  }
}

root.render(<Container/>);