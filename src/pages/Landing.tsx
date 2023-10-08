// import { FaCode } from "react-icons/fa";
// import Title from "../components/ui/Title";
// import Input from "../components/ui/Input";
// import {
//   MdEmail,
//   MdOutlineVerifiedUser,
//   MdOutlinePassword,
// } from "react-icons/md";
// import { FaHandPeace } from "react-icons/fa";
// import Button from "../components/ui/Button";
// import SubTitle from "../components/ui/SubTitle";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import {} from "../redux/reducers/authReducer";
import CallToAction from "../components/landing/CallToAction";
import Form from "../components/landing/Form";

type Props = {};

const Landing = (props: Props) => {
  const navigate = useNavigate();
  const authState = useAppSelector((state) => state.authReducer);

  if (authState.accessToken !== null) {
    navigate("/editor");
  }

  return (
    <main className="mx-auto flex h-full w-full max-w-7xl flex-row overflow-hidden  px-10 py-20">
      <CallToAction />
      <Form />
    </main>
  );
};

export default Landing;
