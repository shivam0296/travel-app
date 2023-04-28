import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from './Header';
import Trips from './Trips';
import Main from './Main';
import Guide from './Guide';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './login.css'
import Footer from "./Footer";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="login_form">
      <div className="secondry">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label><br/>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div>
          <label>Password: </label><br/>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div><a href="/">Sign Up</a></div>
      </form>
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>
            <section>
                    <BrowserRouter>
                    <Header/>
                    <div>
                        <div>

                        </div>
                    </div>
                    <Main/>
                    <Routes>
                        <Route path="/" element={<Trips/>}></Route>
                        <Route path="/guide" element={<Guide/>}></Route>
                        </Routes>
                    </BrowserRouter>
            </section>
        </div> : <div><Header/>{renderForm}<Footer/></div>}
      </div>
    </div>
  );
}

export default Login;