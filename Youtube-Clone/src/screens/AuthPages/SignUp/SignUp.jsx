import React from "react";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUserSignUp } from "../../../assets/API/SignUp/mutations";
import Container from "../../../Components/Container/Container";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import styles from "../SignIn/styles.module.scss";
import { signin } from "../../../Router/route";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [email, password, firstname, lastname] = watch([
    "email",
    "password",
    "firstname",
    "lastname",
  ]);

  const signUpMutate = useUserSignUp();

  const handleSignUp = () => {
    // e.stopPropogation();
    // console.log(signInError, "errors");
    signUpMutate.mutate(
      { firstname, lastname, email, password },
      {
        onSuccess: (data) => {},
      }
    );
  };
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
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className={styles.firstLastContainer}>
              <Controller
                name="firstname"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    type={"text"}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={"Enter First name"}
                    style={{ width: "95%" }}
                    className={styles.input}
                  />
                )}
              />
              <Controller
                name="lastname"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    type={"text"}
                    onChange={(e) => onChange(e.target.value)}
                    style={{ width: "95%" }}
                    placeholder={"Enter Last name"}
                    className={styles.input}
                  />
                )}
              />
            </div>
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
                    style={{ width: "97%" }}
                    placeholder={"Enter your email"}
                    className={styles.input}
                  />
                )}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    type={"password"}
                    onChange={(e) => onChange(e.target.value)}
                    style={{ width: "97%" }}
                    placeholder={"Enter your password"}
                    className={styles.input}
                  />
                )}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Controller
                name="Confirmpassword"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    type={"password"}
                    onChange={(e) => onChange(e.target.value)}
                    style={{ width: "97%" }}
                    placeholder={"Confirm your password"}
                    className={styles.input}
                  />
                )}
              />
            </div>

            <div className={styles.btnContainer}>
              <Button className={styles.signinBtn} onClick={handleSignUp}>
                Sign In
              </Button>
            </div>
            <div className={styles.forgetpass}>
              <Typography onClick={() => navigate(signin)}>
                Already have an account ?
              </Typography>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
