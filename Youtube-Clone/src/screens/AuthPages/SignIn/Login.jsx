import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import Container from "../../../Components/Container/Container";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import { useUserSignIn } from "../../../assets/API/SignIn/mutations";
import { dashboard, forgetpass, signup } from "../../../Router/route";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../assets/API/Firebase/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function Login() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigating = useNavigate();

  const [email, password] = watch(["email", "password"]);

  console.log(email, password, "email");

  const signInMutate = useUserSignIn();

  const handleSignIn = () => {
    signInMutate.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          navigating(dashboard);
        },
      }
    );
  };

  const user = auth.currentUser;

  console.log(user, "USER");

  return (
    <div className={styles.loginContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <motion.span
            initial={{ x: -1500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              x: { duration: 2 },
            }}
            whileHover={{ scale: 1.1 }}
            className={styles.playbutton}
          ></motion.span>
          <motion.Typography
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ x: { duration: 1 } }}
            className={styles.ytTitle}
          >
            Play
          </motion.Typography>
        </div>
        <div className={styles.containerInput}>
          <form
            className={styles.formInput}
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div style={{ width: "100%" }}>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    type={"email"}
                    onChange={(e) => onChange(e.target.value)}
                    sx={{ fontSize: "20px", color: "black", fontWeight: "600" }}
                    placeholder={"Enter your email"}
                    className={styles.input}
                  />
                )}
              />
            </div>

            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  type={"password"}
                  onChange={(e) => onChange(e.target.value)}
                  sx={{ fontSize: "20px", color: "black", fontWeight: "600" }}
                  placeholder={"Enter your password"}
                  className={styles.input}
                />
              )}
            />

            <div className={styles.btnContainer}>
              <Button className={styles.signinBtn} onClick={handleSignIn}>
                Sign In
              </Button>
            </div>
            <div className={styles.forgetpass}>
              <Typography onClick={() => navigating(forgetpass)}>
                Forget your password ?
              </Typography>
              <Typography
                color={"#6ed9a0"}
                style={{ textDecoration: "underline" }}
                onClick={() => navigating(signup)}
              >
                Create an account
              </Typography>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
