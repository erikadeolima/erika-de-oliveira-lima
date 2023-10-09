import React from "react";
import { useForm, SubmitHandler  } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../../styles/Register.module.css";

interface IFormInput {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  zipcode: string;
  neighborhood: string;
  password: string;
  confirmPassword: string;
  privacy: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string()
  .required("Campo obrigatório")
  .matches(
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    "Email inválido"
  ),
  address: yup.string().required("Campo obrigatório").matches(/^.+,\d{1,4}$/, "Endereço inválido, insira no formato Rua dos Cabritos, 1234"),
  city: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  phone: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(\(\d{2}\)\s?)?\d{5}\-\d{4}$/,
      "Telefone inválido, insira no formato (99) 99999-9999"
    ),
  zipcode: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{5}(?:[-\s]\d{3})?$/, "CEP inválido, insira no formato 99999-999"),
  neighborhood: yup.string().required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Senha inválida, insira no mínimo 8 caracteres, sendo pelo menos 1 letra e 1 número"
    ),
  confirmPassword: yup
  .string()
  .required("Campo obrigatório")
  .oneOf([yup.ref("password")], "As senhas não coincidem"),
  privacy: yup.bool().oneOf([true], "Campo obrigatório"),
});

export const Form= () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormInput>({resolver: yupResolver(schema) as any});

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
      <form className={styles.form}onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.campo}>
      <label className={styles.label}>Nome Completo</label>
      <p className={styles.error}>{errors?.name?.message}</p>   
      <input className={styles.input} {...register("name")} /> 
      </div>
      <div className={styles.campo}>
      <label className={styles.label}>e-mail</label>
      <p className={styles.error}>{errors.email?.message}</p>
      <input className={styles.input} {...register("email")} />
      </div>
      <div className={styles.campo}>
      <label className={styles.label}>Telefone Celular</label>
      <p className={styles.error}>{errors.phone?.message}</p>
      <input className={styles.input} {...register("phone")} />
      </div>
      <h4>Endereço</h4>
      <div >
      <div className={styles.campo}>
          <label className={styles.label}>CEP</label>
          <p className={styles.error}>{errors.zipcode?.message}</p>
          <input className={styles.input} {...register("zipcode")} />
        </div>
        <div className={styles.campo}>
          <label className={styles.label}>Logradouro</label>
          <p className={styles.error}>{errors.address?.message}</p>
          <input className={styles.input} {...register("address")} />
        </div>
        <div className={styles.campo}>
          <label className={styles.label}>Bairro</label>
          <p className={styles.error}>{errors.neighborhood?.message}</p>
          <input className={styles.input} {...register("neighborhood")} />
        </div>
        <div className={styles.campo}>
          <label className={styles.label}>Cidade</label>
          <p className={styles.error}>{errors.city?.message}</p>
          <input className={styles.input} {...register("city")} />
        </div>
        <div className={styles.campo}>
          <label className={styles.label}>Estado</label>
          <p className={styles.error}>{errors.state?.message}</p>
          <input className={styles.input} {...register("state")} />
        </div>        
      </div>

      <div>
      <div className={styles.campo}>
      <label className={styles.label}>Senha</label>
      <p className={styles.error}>{errors.password?.message}</p>
      <input className={styles.input} {...register("password")} />
      
      </div>
      <div className={styles.campo}>
      <label className={styles.label}>Confirme a Senha</label>
      <p className={styles.error}>{errors.confirmPassword?.message}</p>    
      <input className={styles.input} {...register("confirmPassword")} />
     
      </div>
      </div>
      <div className={styles.campo}>
      <div className={styles.campoV1}>
      <input type="checkbox" {...register("privacy")} />
      <label className={styles.labelV1}>Aceito as politicas de privacidade</label>
      </div>
     <div> <p className={styles.error}>{errors.privacy?.message}</p></div>
      </div>
      <div><button className={styles.button} type="submit">Cadastar</button></div>
    </form>
  );
};