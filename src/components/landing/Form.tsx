import { FaHandPeace } from "react-icons/fa";
import SubTitle from "../ui/SubTitle";
import { Link, Outlet, useLocation } from "react-router-dom";

type Props = {};

const Form = (props: Props) => {
  const location = useLocation();

  const isSignIn = location.pathname === "/signin";
  return (
    <section className="flex h-full w-full flex-col justify-center gap-y-4 sm:w-2/5 sm:pl-8">
      <div className="flex flex-col text-lg">
        <div className="greeting flex flex-row items-center gap-x-2 text-primary">
          <FaHandPeace className="" />
          Hi
        </div>
      </div>
      <Outlet />
      <SubTitle className="mx-auto mt-2 flex flex-row gap-x-1 transition-all ease-in-out hover:text-font-primary">
        {isSignIn ? "Not a member?" : "Already a member?"}
        <SubTitle className="underline__transition text-primary">
          {isSignIn ? (
            <Link to="/">Sign Up</Link>
          ) : (
            <Link to="/signin">Login</Link>
          )}
        </SubTitle>
      </SubTitle>
    </section>
  );
};
// "Sign Up" : "Login"

export default Form;
