import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { APIKEY, postReq } from "../Base/base";
import { auth } from "../Firebase/Firebase";

export const useUserSignIn = () => {
  return useMutation(async (email) => {
    const payload = {
      email: email?.email,
      password: email?.password,
      returnSecureToken: true,
    };
    const response = await postReq(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`,
      JSON.stringify(payload)
    );
    const result = await response.json();

    if (result?.error?.message) {
      const errorMessage = () => toast.error(result?.error?.message);
      return errorMessage();
    }
    if (result?.email) {
      // console.log(result);
      const loginSuccess = () => toast.success("Login Successfully");
      localStorage.setItem("auth", result?.idToken);
      // console.log(result, "Data");
      return loginSuccess();
    }

    if (result?.idToken) {
    }

    return response;
  });
};
