import React, { Component } from 'react';

class Moreinfo extends Component {
      

  render() {
    
    return (
        <div>
            <button type="button" className="btn btn-default" onClick={() => window.$("#modal" + this.props.index).modal('toggle')}>
            More Info
            </button>

            <div className="modal fade" id={"modal" + this.props.index} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">More Info</h4>
                        </div>
                    <div className="modal-body">
                    <div className="row">
                    <div className="col-sm-6">
                        <img src="http://placehold.it/200/200" alt="" />
                    </div>
                    <div className="col-sm-6">
                            <ul>
                            <li>
                                {this.props.category}
                            </li>
                            <li>
                                <div className="form-group">
                                    <select className="form-control">
                                        <option value="">Select Size...</option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>
                           </li>
                           <li>
                            Quantity <button className="btn btn-success">0</button>
                           </li>
                          <li>
                            <button className="btn btn-info">Add to Bag</button>
                          </li>
                          </ul>
                    </div>                  
                    </div>
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Moreinfo;
