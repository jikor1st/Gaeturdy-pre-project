import { useRecoilValue } from "recoil";
import { userAtom } from "@/recoil/auth";

const useUserState = () => {
  const { data, isLoading, error } = useRecoilValue(userAtom);

  return { data, isLoading, isError: !!error, error };
};

export default useUserState;
