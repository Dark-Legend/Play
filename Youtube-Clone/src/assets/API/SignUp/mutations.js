import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { APIKEY, postReq } from "../Base/base";
import { auth } from "../Firebase/Firebase";

export const useUserSignUp = () => {
  return useMutation(async (email) => {
    const payload = {
      displayName: `${email?.firstname} ${email?.lastname}`,
      email: email?.email,
      password: email?.password,
      returnSecureToken: true,
    };
    const response = await postReq(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`,
      JSON.stringify(payload)
    );
    const result = await response.json();

    if (result?.error?.message) {
      const errorMessage = () => toast.error(result?.error?.message);
      return errorMessage();
    }
    if (result?.email) {
      const loginSuccess = () => toast.success("Account Created Successfully");
      return loginSuccess();
    }

    return result;
  });
};
