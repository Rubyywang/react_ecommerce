import { Component } from "react";
// if an object was exported with default, you should not use curly braces 
// while importing the same, as only one object can be exported by default from one module, and the rest should be by name. 

export class NavBar extends Component{
    render() {
        // <React.Fragment> can be used in place of the div tags, which allows for the DOM to render the code without rendering the extra div box outside of it
        return (<div> 
            <h1>Hello</h1>
            <p>paragraph</p>
            </div>);
    }

}