import React from "react";
import { LanguageEnum } from "../../../models/LanguageEnum";
import Title from "../../ui/Title";
import SubTitle from "../../ui/SubTitle";
import { BiCheckSquare, BiStar } from "react-icons/bi";
import UserStats from "./UserStats";
import LanguageStats from "./LanguageStats";

type Props = {};

export const Sidebar = (props: Props) => {
  return (
    <div className="info h-full w-72 overflow-y-auto rounded-lg border border-font-secondary p-4 scrollbar-thin scrollbar-thumb-font-secondary">
      <div className="mb-2 aspect-square w-full">
        <img src="/logo.png" alt="logo" />
      </div>
      <Title className="text-center text-2xl">Shivam Kumar</Title>
      <SubTitle className="text-center text-font-tertiary">
        shivam-kumar-shah
      </SubTitle>
      <hr className="my-3 border-font-secondary" />
      <UserStats />
      <hr className="my-3 border-font-secondary" />
      <LanguageStats />
    </div>
  );
};
