import React from "react";
import { Form } from "@/components/Forms/Forms";
import { Button } from "@/components/Button/Button";
import { useRouter } from "next/router";
import styles from "@/styles/Register.module.css";

export default function Register () {
  const router = useRouter()

  const goToLogin = () => {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div >
      <Form />
    </div>
    <div className={styles.login}>
    <h4 >Já possui cadastro? Faça seu Login</h4>
    <Button className={styles.button} name="Login" action={() => goToLogin()} enable={true} />
    </div>
    </div>
  );
};