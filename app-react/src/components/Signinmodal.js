import React, { Component } from 'react';

class Signinmodal extends Component {

  render() {
    return (
        <div>
      <button className="btn btn-primary margin" onClick={() => window.$('#myModal').modal('toggle')}>Sign In</button>

      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    	  <div className="modal-dialog">
				<div className="loginmodal-container">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h1>Login to Your Account</h1><br/>
				  <form>
                        <input type="text" name="user" placeholder="Username"/>
                        <input type="password" name="pass" placeholder="Password"/>
                       <button className="btn btn-primary btn-block">Submit</button>
				  </form>
				</div>
			</div>
		  </div>
        </div>
    );
  }
}

export default Signinmodal;
