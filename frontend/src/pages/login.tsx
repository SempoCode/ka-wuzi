// src/pages/login.tsx
import React, { useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

import { firebaseConfig } from "../firebaseConfig";

// Initialize Firebase app once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Configure FirebaseUI
const uiConfig: firebaseui.auth.Config = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/", // redirect after login
  credentialHelper: firebaseui.auth.CredentialHelper.NONE, // removes account chooser screen
};

export default function FirebaseAuthUI() {
  const uiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());

    if (uiRef.current) {
      ui.start(uiRef.current, uiConfig);
    }
  }, []);

  return <div ref={uiRef} />;
}
