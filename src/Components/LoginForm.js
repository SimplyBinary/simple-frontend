import React from "react"
import { AUTH_LOGIN } from "../Actions/actions.js"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};

    this.handleChange = this.handleChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  	let key = event.target.id
    this.setState({[key]: event.target.value}, () => {
    	console.log(this.state)
    })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username + ' ' + this.state.password);
    event.preventDefault();
  }



    //call redux function that does the login and dispatches to the store
    //bring in thunk?

  render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>			  
				  <label>
				    Email:
				    <input id="username" type="text" name="email" onKeyUp={this.handleChange} />
				  </label>
				  <label>
				    Password:
				    <input id="password" type="password" name="password" onKeyUp={this.handleChange} />
				  </label>
				  <input type="submit" value="Submit" />
				</form>
			</div>
			);
		}
}

export default LoginForm