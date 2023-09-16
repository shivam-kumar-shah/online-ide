import React from "react";
import Input from "../ui/Input";
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import Button from "../ui/Button";

type Props = { className?: string };

const SignIn = ({ className }: Props) => {
  return (
    <div className={`flex flex-col gap-y-4 ${className}`}>
      <span className="text-2xl -mt-2 mb-2">Let's sign you up first!</span>
      <Input
        onClick={() => {}}
        title="email"
        type="email"
        placeholder="Enter your email"
        icon={<MdEmail />}
      />
      <Input
        onClick={() => {}}
        type="password"
        title="password"
        placeholder="Enter your password"
        icon={<MdOutlinePassword />}
      />
      <Button>Take me back</Button>
    </div>
  );
};

export default SignIn;
