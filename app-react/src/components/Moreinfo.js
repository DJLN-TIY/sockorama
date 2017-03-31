import React, { Component } from 'react';

class Moreinfo extends Component {
  render() {
     console.log(this.props)
    return (
    <div>
            <button type="button" className="btn btn-primary" onClick={() => window.$('#moreInfo').modal('toggle')}>
            More Info
            </button>

            <div className="modal fade" id="moreInfo" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">{this.props.name}</h4>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <img className="sock-image" src={this.props.image} alt="Sock image" />
                        </div>
                        <div className="col-sm-3">
                            <ul>
                                <li>{this.props.category}</li>
                                <li>${this.props.price}.00</li>
                                <li><div className="form-group">
                                        <select className="form-control" onChange={(e) => this.setState({size: e.target.value})}>
                                            <option value="">Select Size</option>
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                            <option value="x-large">X-Large</option>
                                        </select> 
                                    </div>
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
    )
  }
}

export default Moreinfo;
