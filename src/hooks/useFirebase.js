/** @format */

import { useEffect, useState } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/Firebase.init";

firebaseAuthentication();

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    // setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
    // .then(result => {
    //   setUser(result.user);
    // })
    // .catch(error => {
    //   setError(error.message);
    // })
    // .finally(() => setIsLoading(false));
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
  }, [auth]);

  const handleRegistration = e => {
    e.preventDefault();
    user?.email
      ? processLogin(email, password)
      : createNewUser(email, password);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        verifyEmail();
      })
      .catch(error => {
        setError(error.message);
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser);
  };
  return {
    user,
    error,
    logOut,
    signInWithGoogle,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    processLogin,
    createNewUser,
    verifyEmail,
    isLoading,
  };
};

export default useFirebase;
