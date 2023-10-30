
import { useForm  } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/Button/Button";
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';
import { login } from "./api/service/userService";
import { useContext } from "react";
import Context from "@/Context/Context";

const schema = yup.object().shape({
  email: yup.string()
  .required("Campo obrigatório")
  .matches(
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    "Email inválido"
  ),
  password: yup
  .string()
  .required("Campo obrigatório")
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    "Senha inválida, insira no mínimo 8 caracteres, sendo pelo menos 1 letra e 1 número"
  ),
});

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors}, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const { isLogged, setIsLogged } = useContext(Context);
  const onSubmitHandler = async (data:any, event:any) => {
    event.preventDefault();
    try {
      const userInfo = await login(data.email, data.password);
      const { id, name, email, address, city, state, zipcode, neighborhood, phone } = userInfo;
      reset();
      localStorage.setItem("isLogged", JSON.stringify({
        id, name, isLogged: true,
      }));
      setIsLogged({
        id, name,email, address, city, state, zipcode, neighborhood, phone, isLogged: true,
      });
      router.push("/home");
    } catch (error) {
      console.log(error);
      localStorage.clear();
      setIsLogged({...isLogged, isLogged: false});
      errors.password = { type: "required", message: "Email ou senha inválidos" };
    }
  };

  const goToRegister = () => {
    router.push("/register");
  }
  return (
    <>
    <div className={styles.container}>
      <div className={styles.form}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={styles.loginTitle}>
      <h2>Faça seu Login</h2>
      </div>
      <div className={styles.email}>
      <input className={styles.input} {...register("email")} placeholder="email" type="email" required />
      <p className={styles.error}>{errors.email?.message}</p>
      </div>
      <div className={styles.email}>
      <input
        {...register("password")}
        className={styles.input}
        placeholder="senha"
        type="password"
        required
      />
      <p className={styles.error}>{errors.password?.message}</p>
      </div>
      <div className={styles.email}>
      <button className={styles.button}type="submit">Login</button>
      </div>
    </form>
      </div>
    <div className={styles.register}>
    <h4>Ainda não tem conta? Cadastre-se</h4>
    <Button className={styles.button} name="Cadastrar" action={() => goToRegister()} enable={true} />
    </div>
    </div>
    </>
  )
};
