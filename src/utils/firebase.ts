import firebase from "firebase";
import { firebaseConfig } from "../keys";

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;
