import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      zipcode: "",
      country: "",
      gender: "",
      color: "",
      phone: "",
      email: ""
    };
  }

  NameChangeHandler = event => {
    this.setState({
      name: event.target.value
    });
  };
  AddressChangeHandler = event => {
    this.setState({
      address: event.target.value
    });
  };
  ZipCodeChangeHandler = event => {
    this.setState({
      zipcode: event.target.value
    });
  };
  CountryChangeHandler = event => {
    this.setState({
      country: event.target.value
    });
  };
  PhoneChangeHandler = event => {
    this.setState({
      phone: event.target.value
    });
  };
  EmailChangeHandler = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Name"
            onChange={this.NameChangeHandler}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Address"
            onChange={this.AddressChangeHandler}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Zip Code"
            onChange={this.ZipCodeChangeHandler}
          />{" "}
          <br />
          <select placeholder="Country">
            <option value="">Please select...</option>
            <option value="">Macedonia</option>
            <option value="">Serbia</option>
            <option value="">Croatia</option>
            <option value="">Greece</option>
          </select>
          <br />
          <input
            type="radio"
            name="gender"
            onChange={this.GenderChangeHandler}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            onChange={this.GenderChangeHandler}
          />{" "}
          Female <br />
          <input type="checkbox" /> Red
          <input type="checkbox" /> Green
          <input type="checkbox" /> Blue <br />
          <input
            type="text"
            placeholder="Phone"
            onChange={this.PhoneChangeHandler}
          />{" "}
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={this.EmailChangeHandler}
          />{" "}
          <br />
          <input
            type="password"
            minLength="6"
            maxLength="8"
            placeholder="password (6-8 characters)"
          />{" "}
          <br />
          <input type="password" placeholder="Verify password" /> <br />
          <input type="submit" placeholder="SEND" />
          <p>
            Your name is: <span>{this.state.name}</span> <br />
            Your address is: <span>{this.state.address} </span> <br />
            Your zip code is: <span>{this.state.zipcode} </span> <br />
            Your phone is: <span>{this.state.phone} </span> <br />
            Your email is: <span>{this.state.email} </span> <br />
          </p>
        </form>
      </div>
    );
  }
}

export default App;
