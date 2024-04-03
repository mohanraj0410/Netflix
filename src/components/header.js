import React, { useEffect } from "react";
import logo from "../img/Netflix_Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { FaUser } from "react-icons/fa6";
import { showGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let user = useSelector((store) => store.user);
  let gptStatus = useSelector((store) => store.gpt.gptSlice);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  let handleCheckSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/");
      });
  };

  let handleGPTsearch = () => {
    dispatch(showGptSearch());
  };

  let handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div>
      <nav
        id="header"
        style={
          user
            ? gptStatus
              ? { position: "fixed" }
              : { position: "fixed", top: "0", backgroundColor: "black" }
            : { position: "static" }
        }
      >
        <div>
          <img className="brand-logo" src={logo} alt="netflix logo" />
        </div>
        <div className="signIn-user">
          {user && (
            <>
              {gptStatus && (
                <select onChange={handleChangeLanguage}>
                  {SUPPORTED_LANGUAGE.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <button className="GPT-Button" onClick={handleGPTsearch}>
                {gptStatus ? "Home Page" : "GPT Search"}
              </button>
              <button className="signOut-Button" onClick={handleCheckSignOut}>
                Sign Out
              </button>
              <div className="signIn-profile">
                <FaUser className="user-icon" />
                <p>{user.displayName}</p>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
