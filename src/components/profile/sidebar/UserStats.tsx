import React from "react";
import Title from "../../ui/Title";
import SubTitle from "../../ui/SubTitle";
import { BiCheckSquare, BiStar } from "react-icons/bi";

type Props = {};

const UserStats = (props: Props) => {
  return (
    <>
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
    </>
  );
};

export default UserStats;
