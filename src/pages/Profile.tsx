import React from "react";
import { BiCheckSquare, BiStar, BiUser } from "react-icons/bi";

import Header from "../components/layout/header";
import Title from "../components/ui/Title";
import SubTitle from "../components/ui/SubTitle";
import Button from "../components/ui/Button";
import { LanguageEnum } from "../models/LanguageEnum";
import { Table } from "../components/profile/table";
import { Sidebar } from "../components/profile/sidebar";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="flex h-full max-h-screen w-screen flex-col">
      <Header />
      <section className="h-full w-full overflow-hidden p-4">
        <main className="mx-auto flex h-full w-full max-w-6xl flex-row gap-x-2">
          <Sidebar />
          <div className="stats h-full w-full overflow-x-auto overflow-y-auto rounded-lg border border-font-secondary p-4 scrollbar-thin scrollbar-thumb-font-secondary">
            <Title className="mb-4 text-2xl">Submissions</Title>
            <Table />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Profile;
