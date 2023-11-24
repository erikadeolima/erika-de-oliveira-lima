import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler  } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../../styles/Register.module.css";
import { login, registerUser } from "@/pages/api/service/userService";
import { useRouter } from 'next/router';

export interface IFormPayload {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  zipcode: string;
  neighborhood: string;
  password: string;
  privacy: boolean;
};
export interface IFormInput extends IFormPayload {
  confirmPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string()
  .required("Campo obrigatório")
  .matches(
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    "Email inválido"
  ),
  address: yup.string().required("Campo obrigatório"),
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

export const Forms= ({ dadosIniciais }: { dadosIniciais?: Omit<IFormInput, 'password' | 'confirmPassword' | 'privacy'> }) => {
  console.log(dadosIniciais);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    setValue,
  } = useForm<IFormInput>({resolver: yupResolver(schema) as any});

  useEffect(() => {
    if (dadosIniciais) {
      Object.entries(dadosIniciais).forEach(([key, value]) => {
        setValue(key as keyof IFormInput, value);
      });
    }
  }, [setValue, dadosIniciais]);

  const subimtData = async (payload: IFormPayload) => {
    try {       
      const newUser = await registerUser(payload);
    } catch (error: any) {
      console.log(error);
      throw new Error('Erro ao criar usuário, certifique-se de que não possui uma conta');
    }
  }

  const onSubmit = async (data: IFormInput) => {
    try {
      await schema.validate(data);
      await subimtData(data);
      login(data.email, data.password);
      reset();
      router.push("/home");
    } catch (error) {
      alert('Erro ao criar usuário, certifique-se de que  não possui uma conta');
    };

   };

  return (
      <form className={styles.form}onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.dados}>
      <div className={styles.subTitle}><h4>Dados pessoais</h4></div>
      <div className={styles.campo}>
      <label className={styles.label}>Nome Completo</label>
      <p className={styles.error}>{errors?.name?.message}</p>   
      <input className={styles.input} {...register("name")} /> 
      </div>
      <div className={styles.campo}>
      <label className={styles.label}>E-mail</label>
      <p className={styles.error}>{errors.email?.message}</p>
      <input className={styles.input} {...register("email")} />
      </div>
      <div className={styles.campo}>
      <label className={styles.label}>Telefone Celular</label>
      <p className={styles.error}>{errors.phone?.message}</p>
      <input className={styles.input} {...register("phone")} />
      </div>
      </div>
      
      <div className={styles.endereco}>
      <div className={styles.subTitle}><h4>Endereço</h4></div>
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

      <div className={styles.senha}>
      <div className={styles.campo}>
      <label className={styles.label}>Senha</label>
      <p className={styles.error}>{errors.password?.message}</p>
      <input type='password' className={styles.input} {...register("password")} />
      
      </div>
      <div className={styles.campo}>
      <label className={styles.label}>Confirme a Senha</label>
      <p className={styles.error}>{errors.confirmPassword?.message}</p>    
      <input type='password' className={styles.input} {...register("confirmPassword")} />
      </div>
      </div>
      <div className={styles.privacy}>
      <div className={styles.campo}>
      <div className={styles.campoV1}>
      <input type="checkbox" {...register("privacy")} />
      <label className={styles.labelV1}>Aceito as politicas de privacidade</label>
      </div>
     <div> <p className={styles.error}>{errors.privacy?.message}</p></div>
      </div>
      </div>
      <div className={styles.buttonArea}><button className={styles.button} type="submit">Cadastar</button></div>
    </form>
  );
};