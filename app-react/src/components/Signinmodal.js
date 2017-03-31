import React, { Component } from 'react';

class Signinmodal extends Component {

    constructor(props) {
        super(props)
        this.signin = this.signin.bind(this)
        this.state = {
            email: '',
           password: ''
        }
    }

signin() {
        if(this.state.email !== '' && this.state.password !== '') {
        
        fetch(window.apiHost + '/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email: this.state.email,
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
            <button className="btn btn-primary margin nav-buttons" onClick={() => window.$('#myModal').modal('toggle').signin}>Sign In</button>

            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="loginmodal-container">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h1>Login to Your Account</h1><br/>
                <form>
                  <input type="text" name="email" value={this.state.email} placeholder="Email Address"/>
                  <input type="password" name="password" value={this.state.password} placeholder="Password"/>
                  <button className="btn btn-primary btn-block" onClick={() => this.signin()}>Submit</button>
                </form>
              </div>
            </div>
          </div>
       </div>
    );
  }
}


export default Signinmodal;
<<<<<<< HEAD

=======
      // 
      //   <div>
      // <button classNameName="btn btn-primary margin" data-toggle="modal" data-target="#login-modal" >Sign In</button>
      //
      // <div classNameName="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    	//   <div classNameName="modal-dialog">
			// 	<div classNameName="loginmodal-container">
			// 		<h1>Login to Your Account</h1><br/>
			// 	  <form>
      //                   <input type="text" name="user" placeholder="Username"/>
      //                   <input type="password" name="pass" placeholder="Password"/>
      //                   <input type="submit" name="login" classNameName="login loginmodal-submit" value="Login"/>
			// 	  </form>
			// 	</div>
			// </div>
		  // </div>
      //   </div>
>>>>>>> 7c2bd20c3e4e7f0b97b719fcbf23a16169124ddd
