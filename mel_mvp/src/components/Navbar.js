import React, { Component } from 'react'

class Navbar extends Component {

  handleInputChange(event) { //I catch the value of the input directly
    this.props.updateSearch(event.target.value) //PROPS!
  }


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand font-weight-bold text-success" href="#"><i className="far fa-newspaper"></i> {this.props.title}</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="../App.js">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Countries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2"
              //I don't need 'name' attribute bc I only have one input to catch the value
              type="text"
              placeholder="Search"
              onChange={e => this.handleInputChange(e)} />
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar;


