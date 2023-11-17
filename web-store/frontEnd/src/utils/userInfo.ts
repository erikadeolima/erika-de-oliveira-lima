import { TIsLogged } from "@/Context/ContextTypes";

export const setUserInfo = ({id, name, isLogged}: Omit<TIsLogged, "email"| "address"| "city"| "state" | "zipcode" | "neighborhood"| "phone">) => {
  localStorage.setItem("isLogged", JSON.stringify({
    id, name, isLogged: true,
  }));
};

export const getUserInfo = (): Omit<TIsLogged, "email"| "address"| "city"| "state" | "zipcode" | "neighborhood"| "phone"> => {
  const userInfo = JSON.parse(localStorage.getItem("isLogged") || "{}");
  if(userInfo === null){
    return {id: 0, name: "", isLogged: false};
  }else{
  return userInfo;
}
};