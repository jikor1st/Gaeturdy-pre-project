// import { signOutUser } from "@/firebase/api/auth";
import { useMutation } from "@tanstack/react-query";

const useSignOut = () => {
  return useMutation({
    // mutationFn: signOutUser,
    onSuccess() {
      alert("로그아웃");
    },
  });
};

export default useSignOut;
