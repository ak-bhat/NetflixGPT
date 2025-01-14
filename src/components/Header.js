import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-30">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      { user &&
        <div className="flex p-4">
          <img
            className="w-10 h-10 m-2"
            src="https://i.pinimg.com/originals/76/49/b0/7649b0de59f4d7c55b1fb1f998185587.jpg"
            alt="ProPic"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      }
    </div>
  );
};

export default Header;
