import React, { Component } from 'react';

class Signinmodal extends Component {

  render() {
    return (
        <div>
      <button className="btn btn-primary margin" data-toggle="modal" data-target="#login-modal" >Sign In</button>

      <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    	  <div className="modal-dialog">
				<div className="loginmodal-container">
					<h1>Login to Your Account</h1><br/>
				  <form>
                        <input type="text" name="user" placeholder="Username"/>
                        <input type="password" name="pass" placeholder="Password"/>
                        <input type="submit" name="login" className="login loginmodal-submit" value="Login"/>
				  </form>
				</div>
			</div>
		  </div>
        </div>
    );
  }
}

export default Signinmodal;
