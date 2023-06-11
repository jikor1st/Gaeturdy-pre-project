// import { signInUser } from "@/firebase/api/auth";
import { useMutation } from "@tanstack/react-query";

const useSignIn = () => {
  return useMutation({
    // mutationFn: signInUser,
    onSuccess() {
      alert("로그인 성공");
    },
  });
};

export default useSignIn;
