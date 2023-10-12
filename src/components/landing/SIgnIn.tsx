import React, { useState } from "react";
import Input from "../ui/Input";
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import Button from "../ui/Button";
// import { loginAsyncThunk } from "../../redux/reducers/Auth/authReducer";
import { useLoginMutation } from "../../redux/reducers/Auth/authApiSlice";
import { AuthCredentials } from "../../redux/reducers/Auth/types/auth";
import { useAppDispatch } from "../../redux/store";

type Props = { className?: string };

const SignIn = ({ className }: Props) => {
  // const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async () => {
    const cred: AuthCredentials = { email: email, password: password };

    try {
      await login(cred).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`flex flex-col gap-y-4 ${className}`}>
      <span className="-mt-2 mb-2 text-2xl">Welcome Back!</span>
      <Input
        onClick={() => {}}
        title="email"
        type="email"
        placeholder="Enter your email"
        icon={<MdEmail />}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
        }}
      />
      <Input
        onClick={() => {}}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
        }}
        type="password"
        title="password"
        placeholder="Enter your password"
        icon={<MdOutlinePassword />}
      />
      <Button onClick={onSubmit}>Take me back</Button>
    </div>
  );
};

export default SignIn;
