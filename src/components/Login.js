import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);


  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message !== null) return;

    if (!isSigninForm) {
      //Signup logic from Firebase api website
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:{PHOTO_URL}
          })
          .then(()=>{
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                  uid:uid,
                  email:email,
                  displayName:displayName,
                  photoURL:photoURL
              })
            )
          })
          .catch((error)=>{
            setErrorMessage(error.message)
          })
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Signin logic
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
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInform = () => {
    setIsSignInForm(!isSigninForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:w-screen"
          src={BACKGROUND}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-7/12 md:w-3/12 absolute p-9 md:p-5 bg-black my-24 md:my-326 mx-auto right-0 left-0 text-white bg-opacity-75"
      >
        <h1 className="font-bold text-center text-xl md:text-3xl md:py-4">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
          ref={password}
        />
        <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 w-24 md:mx-0 mx-16 bg-red-700 md:w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center md:py-6">
          {isSigninForm ? (
            <>
              New to Netflix?{" "}
              <span className="cursor-pointer" onClick={toggleSignInform}>
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already a User?{" "}
              <span className="cursor-pointer" onClick={toggleSignInform}>
                Sign In
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
