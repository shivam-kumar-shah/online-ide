import React from "react";
import { FaCode } from "react-icons/fa";
import Title from "../ui/Title";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <section className="hidden aspect-square w-3/5 flex-col justify-between rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 p-8 font-heading sm:flex lg:p-20">
      <div className="logo flex flex-row items-center gap-x-1">
        <FaCode />
        <span className="underline__transition">online IDE</span>
      </div>
      <div className="flex flex-col gap-y-2 text-2xl tracking-wide md:text-4xl">
        <Title>Practice Problems.</Title>
        <Title>Try out ideas.</Title>
        <Title>For Free.</Title>
      </div>
      <ul className="flex flex-row gap-x-6">
        <li className="underline__transition w-fit">Github Repo</li>
        <li className="underline__transition w-fit">Check out the backend</li>
      </ul>
    </section>
  );
};

export default CallToAction;
