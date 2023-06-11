import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/firebase/initialize";
import { useSetRecoilState } from "recoil";
import { UserAtomType, userAtom } from "@/recoil/auth";

const useInitAuthState = () => {
  const setUserState = useSetRecoilState(userAtom);

  const handleSetUserState = <P extends keyof UserAtomType>(
    key: P,
    value: UserAtomType[P]
  ) => {
    setUserState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(
    //   auth,
    //   (user) => {
    //     if (user) {
    //       handleSetUserState("data", user);
    //     } else {
    //       handleSetUserState("data", null);
    //     }
    //     handleSetUserState("isLoading", false);
    //     handleSetUserState("error", null);
    //   },
    //   (error) => {
    //     handleSetUserState("isLoading", false);
    //     handleSetUserState("error", error);
    //   }
    // );
    // return () => unsubscribe();
  }, []);
};

export default useInitAuthState;
