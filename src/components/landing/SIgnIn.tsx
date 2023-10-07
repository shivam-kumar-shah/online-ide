import React, { useState } from "react";
import Input from "../ui/Input";
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import Button from "../ui/Button";
import { loginAsyncThunk } from "../../redux/reducers/authReducer";
import { AuthCredentials } from "../../redux/reducers/types/auth";
import { useAppDispatch } from "../../redux/store";

type Props = { className?: string };

const SignIn = ({ className }: Props) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    const cred: AuthCredentials = { email: email, password: password };
    dispatch(loginAsyncThunk(cred));
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
