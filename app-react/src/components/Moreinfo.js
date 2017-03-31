import React, { Component } from 'react';

class Moreinfo extends Component {
  render() {
    return (
        <div>
            <button type="button" className="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-sm">More Info</button>

            <div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src="http://placehold.it/800x500" alt="" />
                            </div>
                            <div class="col-sm-4">
                                <ul>
                                    <li>(price)</li>
                                    <li>(color)</li>
                                    <li>(size)</li>
                                    <li>(quantity)</li>
                                    <li>(add to bag)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
  }
}

export default Moreinfo;
