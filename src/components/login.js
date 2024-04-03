import React, { useState, useRef } from "react";
import { validateSignInValues, validateSignUpValues } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  let [isSignInForm, setIsSignInForm] = useState(true);
  let [errorMesssage, setErrorMessage] = useState(null);
  let name = useRef(null); //{current:null}
  let email = useRef(null);
  let password = useRef(null);

  let dispatch = useDispatch();

  let handleCheck = () => {
    let message = isSignInForm
      ? validateSignInValues(email.current.value, password.current.value)
      : validateSignUpValues(
          name.current.value,
          email.current.value,
          password.current.value
        );

    setErrorMessage(message);
    if (message) return;
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  let change = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="body">
      <div className="background-color">
        <Header />
        <div className="SignIn-page">
          <div className="SignIn-container">
            <form onSubmit={(a) => a.preventDefault()} className="SignIn-form">
              <h1>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
              )}
              <input
                ref={email}
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <input
                ref={password}
                type="password"
                placeholder="Enter Your Password"
                required
              />
              <p className="errorMessage">{errorMesssage}</p>
              <button type="submit" onClick={handleCheck}>
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p className="SignIn-or-SignUp">
                {isSignInForm ? (
                  <div>
                    New to Netflix? <a onClick={change}>Sign Up</a> Now
                  </div>
                ) : (
                  <div>
                    Already registered? <a onClick={change}>Sign In</a> Now
                  </div>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
