import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
 
export default class Reserve extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
 
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNumGuests = this.onChangeNumGuests.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        startDate: "",
        endDate: "",
        name: "",
        phone: "",
        email: "",
        numGuests: 1
    };
  }
 
  // These methods will update the state properties.
  onChangeStartDate(e) {
    this.setState({
      startDate: e.target.value,
    });
    document.getElementById("end-date").disabled = false;
    document.getElementById("end-date").value = this.state.startDate;
  }
 
  onChangeEndDate(e) {
    this.setState({
      endDate: e.target.value,
    });
  }
 
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeNumGuests(e) {
    this.setState({
      numGuests: e.target.value,
    });
  }
 
// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
 
    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newReservation = {
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        numGuests: this.state.numGuests
    };
 
    axios
      .post("http://localhost:5000/record/add", newReservation)
      .then((res) => alert(res.data))
      .catch(function(error) { alert(error) });
 
    // We will empty the state after posting the data to the database
    this.setState({
        startDate: new Date(),
        endDate: "",
        name: "",
        phone: "",
        email: "",
        numGuests: 1
    });
  }
 
  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Reservation</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Reservation name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              required
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              required
            />
          </div>
          <div className="form-group">
            <label>Number of guests: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.numGuests}
              onChange={this.onChangeNumGuests}
              min="1"
              required
            />
          </div>
          <div className="form-group">
            <label>Start date: </label>
            <input
              type="datetime-local"
              className="form-control"
              value={this.state.startDate}
              onChange={this.onChangeStartDate}
              min={new Date()}
              required
            />
          </div>
          <div className="form-group">
            <label>End date: </label>
            <input
                id="end-date"
              type="datetime-local"
              className="form-control"
              value={this.state.endDate}
              onChange={this.onChangeEndDate}
              required
              disabled
              min={this.state.startDate}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create reservation"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}