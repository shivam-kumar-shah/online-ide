import React from "react";
import Header from "../components/layout/header";

type Props = {};

export const Profile = ({}: Props) => {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <main className="mx-auto flex h-full w-full max-w-5xl flex-row bg-red-500">
        <div className="w-full">Profile</div>
      </main>
    </div>
  );
};
