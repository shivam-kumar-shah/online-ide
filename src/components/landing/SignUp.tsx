import React from "react";
import Input from "../ui/Input";
import {
  MdEmail,
  MdOutlinePassword,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import Button from "../ui/Button";

type Props = { className?: string };

const SignUp = ({ className }: Props) => {
  return (
    <div className={`flex flex-col gap-y-4 ${className}`}>
      <span className="-mt-2 mb-2 text-2xl">Let's sign you up first!</span>
      <Input
        onClick={() => {}}
        title="email"
        type="email"
        placeholder="Enter your email"
        icon={<MdEmail />}
      />
      <Input
        onClick={() => {}}
        title="username"
        placeholder="Enter your username"
        icon={<MdOutlineVerifiedUser />}
      />
      <Input
        onClick={() => {}}
        type="password"
        title="password"
        placeholder="Enter your password"
        icon={<MdOutlinePassword />}
      />
      <Button>Start Coding now</Button>
    </div>
  );
};

export default SignUp;
