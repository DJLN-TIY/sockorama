import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
        super(props)
        this.signup = this.signup.bind(this)
        this.state = {
          name: '',
          email: '',
          address: '',
          password:''
        }
    }

signup() {
        if(this.state.name !== '' && this.state.email !== ''&& this.state.password !== '') {
        
        fetch(window.apiHost + '/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               name: this.state.name,
               email: this.state.email,
               address: this.state.address,
               password: this.state.password 
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (response.token) {
                sessionStorage.setItem('token', response.token);
                alert('login successful');
            }
        })
      }    
 } 
  

  render() {
    return (
        <div>
      <button className="btn btn-info margin nav-buttons" onClick={() => window.$('#login-modal').modal('toggle')}>Sign Up</button>

      <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    	  <div className="modal-dialog">
				<div className="loginmodal-container">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h1>Create Your Account</h1><br/>
				  <form>
                        <input type="text" name="name" onChange={(e) => this.setState({name: e.target.value})} placeholder="Full Name"/>
                        <input type="text" name="email" onChange={(e) => this.setState({email: e.target.value})} placeholder="Email Address"/>
                        <input type="text" name="address" onChange={(e) => this.setState({address: e.target.value})} placeholder="Physical Address"/>
                        <input type="password" name="password" onChange={(e) => this.setState({password: e.target.value})} placeholder="Password"/>
                        <button className="btn btn-success btn-block" onClick={() => this.signup()}>Submit</button>
				  </form>
				</div>
			</div>
		  </div>
        </div>
    );
  }
}

export default Signup;
