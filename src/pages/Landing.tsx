import { FaCode } from "react-icons/fa";
import Title from "../components/ui/Title";
import Input from "../components/ui/Input";
import { MdEmail } from "react-icons/md";

type Props = {};

const Landing = (props: Props) => {
  return (
    <main className="flex flex-row h-full w-full max-w-7xl p-20 mx-auto">
      <section className="flex flex-col bg-gradient-to-br from-indigo-500 to-purple-500 h-full w-3/5 rounded-lg font-heading p-20 justify-between">
        <div className="logo flex flex-row items-center gap-x-1">
          <FaCode />
          <span className="underline__transition">online IDE</span>
        </div>
        <div className="flex flex-col text-4xl tracking-wide gap-y-2">
          <Title>Practice Problems.</Title>
          <Title>Try out ideas.</Title>
          <Title>For Free.</Title>
        </div>
        <ul className="flex flex-row gap-x-6">
          <li className="underline__transition w-fit">Github Repo</li>
          <li className="underline__transition w-fit">Check out the backend</li>
        </ul>
      </section>
      <section className="h-full w-2/5 flex flex-col gap-y-4">
        <Input
          onClick={() => {}}
          title="email"
          placeholder="Enter your email"
          icon={<MdEmail />}
        />
        <Input
          onClick={() => {}}
          title="email"
          placeholder="Enter your email"
          icon={<MdEmail />}
        />
        <Input
          onClick={() => {}}
          title="email"
          placeholder="Enter your email"
          icon={<MdEmail />}
        />
      </section>
    </main>
  );
};

export default Landing;
