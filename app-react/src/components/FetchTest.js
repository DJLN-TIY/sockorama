function signin() {

     fetch('window.apiHost + '/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: this.props.email,
            password: this.props.password
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (response.token) {
                sessionStorage.setItem('token', response.token);
                alert('success');
            }
       }) 
    } 
}

onClick={() => this.props.signin()}