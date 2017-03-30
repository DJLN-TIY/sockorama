import React, { Component } from 'react';

class Signup extends Component {

  render() {
    return (
        <div>
      <button className="btn btn-info margin" onClick={() => window.$('#login-modal').modal('toggle')}>Sign Up</button>

      <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    	  <div className="modal-dialog">
				<div className="loginmodal-container">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h1>Create Your Account</h1><br/>
				  <form>
                        <input type="text" name="fname" placeholder="First Name"/>
                        <input type="text" name="lname" placeholder="Last Name"/>
                        <input type="text" name="email" placeholder="Email Address"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <button className="btn btn-success btn-block">Submit</button>
				  </form>
				</div>
			</div>
		  </div>
        </div>
    );
  }
}

export default Signup;
