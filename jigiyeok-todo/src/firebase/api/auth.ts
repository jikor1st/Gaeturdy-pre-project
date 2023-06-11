import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import { auth } from "../initialize";

type AuthFormType = {
  email: string;
  password: string;
};

// export const registerUser = ({ email, password }: AuthFormType) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// export const signInUser = ({ email, password }: AuthFormType) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

// export const signOutUser = () => {
//   return signOut(auth);
// };
