import React from 'react';
import ReactDOM from 'react-dom/client';
import CarFounction from './Car.js';
import {useState} from 'react';
import Todos from "./Todos.js";
import './App.css';
import './my-sass.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPages";


export default function AppPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element = {<Home />}/>
           <Route path ="blogs" element = {<Blogs />}/>
           <Route path="contact" element = {<Contact/>}/>
           <Route path="*" element = {<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//React Memo
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1","todo 2"]);
  const increment = () => {
    setCount((c) => c + 1);
  } 
  return (
    <>
      <Todos todos = {todos} />
      <hr />
      <div>
       Count: {count}
        <button onClick={increment}>+</button>
      </div>
  </>
)
};

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

function Football() {
  const shoot = (a) => {
    alert(a);
  }
  return (
    <button onClick = {shoot("goal")}>Take the shot!</button>
  );
}

function CarOne(props) {
  return <li> I am a {props.brand}</li>;
}

function GarageOne() {
    const cars = [
              {id: 1, brand:'Ford'},
              {id: 2,  brand:'BMW'}
    ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <CarOne key={car.id} brand = {car.brand}/>)}
      </ul>
    </>
  )
}

//form
function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was:${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" 
                value = {name}
                onChange = {(e)=>setName(e.target.value)}
        />
      </label>
    </form>
  )
}

//FormTwo 
function MyFormTwo() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]:value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type = "text"
          name = "username"
          value = {inputs.username || ""}
          onChange = {handleChange}
          />
      </label> Enter your age:
      <label>
      <input 
        type = "number"
        name = "age"
        value = {inputs.age || ""}
        onChange={handleChange}
        />
        </label>
      <input type = "submit" />
    </form>
  )
}

// textarea
function MyTextarea() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );
  const handleChange = (event) => {
    setTextarea(event.target.value)
  }
  return (
    <form>
      <textarea value = {textarea} onChange = {handleChange} />
    </form>
  )
}

//Selection
function MySelection() {
  const [myCar, setMyCar] = useState("volvo");
  const handleChange = (event) => {
    setMyCar(event.target.value)
  }
  return (
    <form>
      <select value = {myCar} onChange = {handleChange}>
        <option value = "Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}


//react Hook
//allows function compnents to have asscess to state and other react features.
function Favoritecolor() {
  const [color, setColor] = useState("red");
  return (
    <>  
      <h1>My favorite color is {color}!</h1>
      <button
        type = "button"
        onClick = {() => setColor("blue")}
        >Blue</button>
        <button type = "button"
        onClick = {() => setColor("red")}
        >Red</button>
    </>
  )
}

function CarState() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  })
  
  const updateColor = () => {
    setCar(previousState => {
      return {...previousState, color:"blue"}
    });
  }
  return(
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type = "button" onClick={updateColor}>Blue</button>
    </>
  )
}




root.render(<CarState/>);