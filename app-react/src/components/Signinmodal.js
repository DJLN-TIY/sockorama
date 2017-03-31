import React, { Component } from 'react';

class Signinmodal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      changeMade: false
    }
  }
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
    <div>
      <button type="button" className="btn btn-primary btn-lg" onClick={() => window.$('#myModal').modal('toggle')}>
        Launch demo modal
      </button>

      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div className="modal-body">
              {this.state.changeMade ? 'Changes Made' : 'No Changes Made'}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={() => this.setState({changeMade: true})}>Save changes</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Signinmodal;

