import React from "react";
import Header from "../components/layout/header";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="flex h-full max-h-screen w-full flex-col">
      <Header />
      <section className="h-full w-full overflow-scroll p-4">
        <main className="mx-auto flex h-fit min-h-full w-full max-w-6xl flex-row gap-x-2">
          <div className="info min-h-full w-1/4 rounded-lg border border-font-secondary p-4"></div>
          <div className="stats min-h-full w-3/4 rounded-lg border border-font-secondary p-4"></div>
        </main>
      </section>
    </div>
  );
};

export default Profile;
