import React from "react";
import { BiCheckSquare, BiStar, BiUser } from "react-icons/bi";

import Header from "../components/layout/header";
import Title from "../components/ui/Title";
import SubTitle from "../components/ui/SubTitle";
import Button from "../components/ui/Button";
import { LanguageEnum } from "../models/LanguageEnums";
import { Table } from "../components/profile/table";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="flex h-full max-h-screen w-screen flex-col">
      <Header />
      <section className="h-full w-full overflow-hidden p-4">
        <main className="mx-auto flex h-full w-full max-w-6xl flex-row gap-x-2">
          <div className="info scrollbar-thumb-font-secondary scrollbar-thin h-full w-72 overflow-y-auto rounded-lg border border-font-secondary p-4">
            <div className="mb-2 aspect-square w-full">
              <img src="/logo.png" alt="logo" />
            </div>
            <Title className="text-center text-2xl">Shivam Kumar</Title>
            <SubTitle className="text-center text-font-tertiary">
              shivam-kumar-shah
            </SubTitle>
            <hr className="my-3 border-font-secondary" />
            <Title className="mb-2">User Stats</Title>
            <SubTitle className="mb-1 flex flex-row items-center gap-x-2 text-font-tertiary">
              <BiCheckSquare className="text-xl text-primary" />
              Submissions
              <Title>0</Title>
            </SubTitle>
            <SubTitle className="flex flex-row items-center gap-x-2 text-font-tertiary">
              <BiStar className="text-xl text-amber-500" />
              Bookmarks
              <Title>0</Title>
            </SubTitle>
            <hr className="my-3 border-font-secondary" />
            <Title className="mb-2">Languages</Title>
            <ul className="flex flex-col gap-y-2">
              <li>
                <img src={LanguageEnum.c} alt="c" className="rounded-sm" />
              </li>
              <li>
                <img src={LanguageEnum.cpp} alt="cpp" className="rounded-sm" />
              </li>
              <li>
                <img src={LanguageEnum.js} alt="js" className="rounded-sm" />
              </li>
              <li>
                <img src={LanguageEnum.ts} alt="ts" className="rounded-sm" />
              </li>
              <li>
                <img
                  src={LanguageEnum.python}
                  alt="python"
                  className="rounded-sm"
                />
              </li>
            </ul>
          </div>
          <div className="stats scrollbar-thumb-font-secondary scrollbar-thin h-full w-full overflow-x-auto overflow-y-auto rounded-lg border border-font-secondary p-4">
            <Title className="mb-4 text-2xl">Submissions</Title>
            <Table />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Profile;
