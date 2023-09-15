import React from "react";
import { AiOutlineLike, AiOutlineDislike, AiOutlineStar } from "react-icons/ai";

type Props = {};

const Prompt = (props: Props) => {
  return (
    <div className="w-1/2 h-full flex flex-col ">
      <div className="prompt__header font-heading">
        <div className="underline__transition w-fit border px-4 py-2 rounded-t-md border-font-secondary border-b-0">
          Description
        </div>
      </div>
      <div className="prompt__body border border-font-secondary h-full rounded-md rounded-tl-none p-4">
        <div className="prompt__body__heading font-heading flex flex-row items-center justify-between">
          <div className="prompt__body__heading__title text-xl font-bold">
            1. Two Sum
          </div>
          <div className="prompt__body__heading__hint underline__transition text-sm text-font-tertiary transition-all ease-in-out hover:text-font-primary">
            Hint
          </div>
        </div>
        <div className="prompt__body__metrics mt-2 flex flex-row text-font-tertiary items-center gap-x-4">
          <div className="difficulty">Medium</div>
          <div className="like flex flex-row items-center gap-x-1 cursor-pointer transition-all ease-in-out hover:text-font-primary">
            <AiOutlineLike />
            <span>28.3K</span>
          </div>
          <div className="dislike flex flex-row items-center gap-x-1 cursor-pointer transition-all ease-in-out hover:text-font-primary">
            <AiOutlineDislike />
            <span>5.4K</span>
          </div>
          <AiOutlineStar className="ml-auto transition-all ease-in-out hover:text-font-primary" />
        </div>
        <div className="prompt__body__description text-justify mt-4">
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target. You may assume
          that each input would have exactly one solution, and you may not use
          the same element twice. You can return the answer in any order.
        </div>
      </div>
    </div>
  );
};

export default Prompt;
