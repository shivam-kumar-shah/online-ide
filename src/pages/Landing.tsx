import { FaCode } from "react-icons/fa";
import Title from "../components/ui/Title";
import Input from "../components/ui/Input";
import {
  MdEmail,
  MdOutlineVerifiedUser,
  MdOutlinePassword,
} from "react-icons/md";
import { FaHandPeace } from "react-icons/fa";
import Button from "../components/ui/Button";
import SubTitle from "../components/ui/SubTitle";
import SignUp from "../components/landing/SignUp";
import SignIn from "../components/landing/SIgnIn";
import CallToAction from "../components/landing/CallToAction";
import Form from "../components/landing/Form";

type Props = {};

const Landing = (props: Props) => {
  return (
    <main className="mx-auto flex aspect-[3/2] max-h-full w-full max-w-7xl flex-row overflow-hidden px-10 py-20">
      <CallToAction />
      <Form />
    </main>
  );
};

export default Landing;
