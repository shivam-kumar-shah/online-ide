import React, { useState } from "react";
import { FaHandPeace } from "react-icons/fa";
import SignIn from "./SIgnIn";
import SubTitle from "../ui/SubTitle";
import SignUp from "./SignUp";

type Props = {};

const Form = (props: Props) => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <section className="h-full w-2/5 flex flex-col gap-y-4 pl-8 justify-center">
      <div className="text-lg flex flex-col">
        <div className="greeting flex flex-row items-center gap-x-2 text-primary">
          <FaHandPeace className="" />
          Hi
        </div>
      </div>
      {!isSignIn && <SignUp />}
      {isSignIn && <SignIn />}
      <SubTitle className="flex flex-row gap-x-1 mx-auto mt-2 hover:text-font-primary transition-all ease-in-out">
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
