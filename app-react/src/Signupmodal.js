import React, { Component } from 'react';

class Signup extends Component {

  render() {
    return (
        <div>
      <button className="btn btn-info margin" data-toggle="modal" data-target="#login-modal" >Sign Up</button>

      <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    	  <div className="modal-dialog">
				<div className="loginmodal-container">
					<h1>Login to Your Account</h1><br/>
				  <form>
                        <input type="text" name="fname" placeholder="First Name"/>
                        <input type="text" name="lname" placeholder="Last Name"/>
                        <input type="text" name="email" placeholder="Email Address"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <input type="submit" name="login" className="login loginmodal-submit" value="Login"/>
				  </form>
				</div>
			</div>
		  </div>
        </div>
    );
  }
}

export default Signup;
