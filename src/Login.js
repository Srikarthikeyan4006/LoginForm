import React , { Component } from "react";
import fire from "./config/fire";
import './App.css'
class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return(
        <div className="App">
        <div className="App__Aside">
            <h1 className="title">Welcome to KURIYAM</h1>
            
        </div>
        <div className="App__Form">
            <h1>To be a part of our Journey 🐱‍💻</h1>
             <form >
                 <h1 className="FormField__Label">Email</h1>
                <input className="FormField__Input"
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
                <br/>
                <h1 className="FormField__Label">Password</h1>
               <input className="FormField__Input"
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="Password"
                value={this.state.password}
                /><br/>
                <button  className="FormField__Button" onClick={this.login}>Login</button>
               
                <button className="FormField__Button"onClick={this.signup}>Signup</button>
            </form>
         </div>
        </div>
    )
}
}
export default Login;