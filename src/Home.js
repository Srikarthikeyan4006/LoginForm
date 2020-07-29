import React , { Component } from "react";
import fire from "./config/fire";
import './App.css'

class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
render()
{
    return(
        <div className="App__Aside">
           <h1>You are logged in !!!</h1>
            <button onClick={this.logout} className="Home__Button">Logout</button>
        </div>
    )
}
}
export default Home;