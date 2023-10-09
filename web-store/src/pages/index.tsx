
import { useForm  } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/Button/Button";
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

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

export default function Home() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = ({e, data}:any) => {
    e.preventDefault();
    console.log({ data });
    reset();
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
}

