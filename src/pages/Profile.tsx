import React from "react";
import Header from "../components/layout/header";

type Props = {};

export const Profile = ({}: Props) => {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <main className="h-full w-full max-w-5xl bg-red-500 mx-auto flex flex-row">
        <div className="w-full">Profile</div>
      </main>
    </div>
  );
};
