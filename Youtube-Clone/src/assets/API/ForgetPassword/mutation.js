import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { auth } from "../Firebase/Firebase";

export const useForgetPassword = () => {
  return useMutation(
    ["useForgetPass"],
    async (email) => {
      const response = await sendPasswordResetEmail(auth, email);

      const result = await response.json();
      console.log(result, "RES");
      return response;
    },
    {
      onSuccess: () => {
        const forgetPassSuccess = () =>
          toast.success("Reset Link has been sent to you email");

        return forgetPassSuccess();
      },
      onError: () => {
        const forgetPassError = () =>
          toast.error("Error have occured try after sometime");
        return forgetPassError();
      },
    }
  );
};
