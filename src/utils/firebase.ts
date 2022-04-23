import { FirebaseApp, initializeApp } from "firebase/app";

let app: FirebaseApp | null = null;

export const getFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyA_zS7n4ZgPAchaxPe-VClLP_-UEaZEQXw",
    authDomain: "stephen-s-assistant.firebaseapp.com",
    databaseURL: "https://stephen-s-assistant.firebaseio.com",
    projectId: "stephen-s-assistant",
    storageBucket: "stephen-s-assistant.appspot.com",
    messagingSenderId: "202177879244",
    appId: "1:202177879244:web:796a65af0a219545bbf669",
  };

  if (app == null) {
    app = initializeApp(firebaseConfig);
  }

  return app;
};
