import React, { Component } from 'react';


class Footer extends Component {

    render() {
        return (
          <footer className="text-center">
        <div className="footer-above">
            <div className="container">
                <div className="row">
                    <div className="footer-col col-md-4">
                        <h3>Location</h3>
                        <p>1232 College Ave
                            <br/>Indianapolis, IN  46202</p>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>Around the Web</h3>
                        <ul className="list-inline">
                            <li>
                                <a href="#" className="btn-social btn-outline"><span className="sr-only">Facebook</span><i className="fa fa-fw fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><span className="sr-only">Google Plus</span><i className="fa fa-fw fa-google-plus"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><span className="sr-only">Twitter</span><i className="fa fa-fw fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><span className="sr-only">Dribble</span><i className="fa fa-fw fa-dribbble"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>About Sock-o-Rama</h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. <a href="http://startbootstrap.com">Sock-o-Rama</a>.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        Copyright &copy; Sock-o-Rama 2017
                    </div>
                </div>
            </div>
        </div>
    </footer>
        )
    }
}

export default Footer;
