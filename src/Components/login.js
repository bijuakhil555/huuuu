import React, { Component } from "react";
import firebase from 'firebase/app';
import { auth } from 'firebase';
import {isAuthenticated,authenticate} from './Auth/Auth'

var element;

const firebaseConfig = {
  apiKey: "AIzaSyCAXbQ9-j_ah0scqU8h_oea7zn7IN7EgXo",
  authDomain: "authtestotp-20c40.firebaseapp.com",
  projectId: "authtestotp-20c40",
  storageBucket: "authtestotp-20c40.appspot.com",
  messagingSenderId: "406911817001",
  appId: "1:406911817001:web:a52cc222e6d10a07b3d338",
  measurementId: "G-WB3117M2ZN"
};

var confirmationResult;


class PhoneLogin extends Component {

  componentDidMount(){
    firebase.initializeApp(firebaseConfig);

  }

  constructor() {
    super();
    this.state = {
      form: true,
      alert: false,
    };
  }



  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };


  onSignInSubmit = (e) => {
    e.preventDefault();
    this.setUpRecaptcha();
    let phoneNumber = "+91" + this.state.mobile;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onSubmitOtp = (e) => {
    e.preventDefault();
    let otpInput = this.state.otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        // User signed in successfully.
        // console.log("Result" + result.verificationID);
        let user = result.user;
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
  };

  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5">
              <h2 className="mb-3">Login</h2>
              <form className="form" onSubmit={this.onSignInSubmit}>
                <div id="recaptcha-container"></div>
                <div>
                  <input
                    type="number" name="mobile"
                    placeholder="Mobile Number"
                    onChange={this.onChangeHandler}
                    required />
                </div>
                <button
                
                type="submit">Submit</button>
              </form>
            </div>
          </div>


          <div className="row">
            <div className="col-12 col-md-6 col-lg-5">
              <h2 className="mb-3">Enter OTP</h2>
              <form className="form" onSubmit={this.onSignInSubmit}>
                <div id="recaptcha-container"></div>
                <div>
                  <input
                    id="otp"
                    type="number" name="otp"
                    placeholder="otp"
                    onChange={this.onChangeHandler}
                    required />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        {/* <Container fluid="sm" className="mt-3">
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={5}>
              <h2 className="mb-3">Login</h2>
              <Form className="form" onSubmit={this.onSubmitOtp}>
                <div id="recaptcha-container"></div>
                <Form.Group>
                  <Form.Control
                    type="number"
                    name="mobile"
                    placeholder="Mobile Number"
                    onChange={this.onChangeHandler}
                    required
                  />
                </Form.Group>
                <PrimaryButton button="Submit" type="submit" />
              </Form>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={5}>
              <h2 className="mb-3">Enter OTP</h2>
              <Form className="form" onSubmit={this.onSubmitOtp}>
                <Form.Group>
                  <Form.Control
                    id="otp"
                    type="number"
                    name="otp"
                    placeholder="OTP"
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
                <PrimaryButton button="Submit" type="submit" />
              </Form>
            </Col>
          </Row>
          <GoogleLogin />
        </Container> */}
      </div>
    );
  }
}

export default PhoneLogin
