import React, { Component } from 'react';
class Form extends Component {
  state = {
    city: '',
    country: '',
    disabled: true
  };

  handleChange = e => {
    let { name } = e.target;
    this.setState({
      city: name,
      country: name,
      disabled: false
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather} id="cityForm">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <input
                className="form-control"
                type="text"
                name="city"
                placeholder="Search city name or UK post code..."
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-3">
              <button
                className="btn btn-outline-info"
                disabled={!this.state.city}
              >
                Get Weather
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
