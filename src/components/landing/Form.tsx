import React, { useState } from "react";
import { FaHandPeace } from "react-icons/fa";
import SignIn from "./SIgnIn";
import SubTitle from "../ui/SubTitle";
import SignUp from "./SignUp";

type Props = {};

const Form = (props: Props) => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <section className="flex h-full w-2/5 flex-col justify-center gap-y-4 pl-8">
      <div className="flex flex-col text-lg">
        <div className="greeting flex flex-row items-center gap-x-2 text-primary">
          <FaHandPeace className="" />
          Hi
        </div>
      </div>
      {!isSignIn && <SignUp />}
      {isSignIn && <SignIn />}
      <SubTitle className="mx-auto mt-2 flex flex-row gap-x-1 transition-all ease-in-out hover:text-font-primary">
        {isSignIn ? "Not a member?" : "Already a member?"}
        <SubTitle
          className="underline__transition text-primary"
          onClick={() => {
            setIsSignIn((prev) => !prev);
          }}
        >
          {isSignIn ? "Sign Up" : "Login"}
        </SubTitle>
      </SubTitle>
    </section>
  );
};

export default Form;
