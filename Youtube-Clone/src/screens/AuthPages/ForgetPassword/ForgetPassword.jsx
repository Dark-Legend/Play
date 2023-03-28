import React from "react";
import { Controller, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import styles from "src/screens/AuthPages/SignIn/styles.module.scss";
import Button from "../../../Components/Button/Button";
import { Toaster } from "react-hot-toast";
import Input from "../../../Components/Input/Input";
import { Typography } from "@mui/material";
import { useForgetPassword } from "../../../assets/API/ForgetPassword/mutation";

const ForgetPassword = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const emailAddress = watch("email");
  const useForgetPass = useForgetPassword();

  const handleResetPassword = () => {
    useForgetPass.mutate(emailAddress, {
      onSuccess: (data) => {
        console.log(data, "DATA");
      },
    });
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
            onSubmit={handleSubmit(handleResetPassword)}
          >
            <div className={styles.forgetpassContainer}>
              <Typography color={"white"} fontSize={26}>
                Forget Password ?
              </Typography>
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
                    sx={{ fontSize: "20px", color: "black", fontWeight: "600" }}
                    placeholder={"Enter your email"}
                    className={styles.input}
                  />
                )}
              />
            </div>
            <div className={styles.btnContainer}>
              <Button className={styles.signinBtn} onClick={() => {}}>
                Verify Account
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ForgetPassword;
