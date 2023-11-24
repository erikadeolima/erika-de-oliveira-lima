import React from "react";
import { Forms } from "@/components/Forms/Forms";
import { Button } from "@/components/Button/Button";
import { useRouter } from "next/router";
import styles from "@/styles/Register.module.css";
import Header from "@/components/Header/Header";

export default function Register () {
  const router = useRouter()

  const goToLogin = () => {
    router.push("/");
  }

  return (
    <>
    <div className={styles.container}>
      <div >
      <Forms />
    </div>
    <div className={styles.login}>
    <h4 >Já possui cadastro? Faça seu Login</h4>
    <Button className={styles.button} name="Login" action={() => goToLogin()} enable={true} />
    </div>
    </div>
    </>
  );
};