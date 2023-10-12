import React, { useState } from "react";
import Input from "../ui/Input";
import {
  MdEmail,
  MdOutlinePassword,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import Button from "../ui/Button";
import { useSignUpMutation } from "../../redux/reducers/Auth/authApiSlice";
import { AuthCredentials } from "../../redux/reducers/Auth/types/auth";
import { useNavigate } from "react-router-dom";
type Props = { className?: string };

const SignUp = ({ className }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [signUp, { isLoading }] = useSignUpMutation();

  const navigate = useNavigate();

  const onSubmit = async () => {
    const cred: AuthCredentials = { email, password, username };
    try {
      await signUp(cred).unwrap();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`flex flex-col gap-y-4 ${className}`}>
      <span className="-mt-2 mb-2 text-2xl">Let's sign you up first!</span>
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
        title="username"
        placeholder="Enter your username"
        icon={<MdOutlineVerifiedUser />}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setUsername(event.target.value);
        }}
      />
      <Input
        onClick={() => {}}
        type="password"
        title="password"
        placeholder="Enter your password"
        icon={<MdOutlinePassword />}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
        }}
      />
      <Button onClick={onSubmit}>Start Coding now</Button>
    </div>
  );
};

export default SignUp;
