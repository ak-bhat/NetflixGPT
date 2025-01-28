import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPT } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gptSearch = useSelector((store) => store.gpt.gptSearch);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); //Unsubscribe after component unmount
  }, []);

  const toggleGptSearch = () => {
    dispatch(toggleGPT());
  };

  const selectLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-30">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          {gptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={selectLanguage}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 m-2 bg-white text-black rounded-lg font-mono"
            onClick={toggleGptSearch}
          >
            {gptSearch? " Home " : "GPT Search"}
          </button>
          <img className="w-10 h-10 m-2" src={user.photoURL} alt="ProPic" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
