import React from "react";
import {
  BiCheckSquare,
  BiCheckbox,
  BiCheckboxMinus,
  BiHistory,
  BiLinkExternal,
  BiStar,
} from "react-icons/bi";
import { Problem } from "../../models/Problem";
import { Status } from "../../models/StatusEnum";
import { AiTwotoneStar } from "react-icons/ai";

interface Props extends Problem {
  index: number;
}

const getIcon = (status: Status) => {
  switch (status) {
    case Status.attempted:
      return <BiCheckboxMinus className="text-amber-500" />;
    case Status.solved:
      return <BiCheckSquare className="text-green-500" />;
    default:
      return;
  }
};

const getBookmarkIcon = (status: Status) => {
  switch (status) {
    case Status.bookmarked:
      return <AiTwotoneStar className="cursor-pointer text-yellow-300" />;
    default:
      return <BiStar className="cursor-pointer" />;
  }
};

const TableRow = ({ index, id, status, title, solutionLink }: Props) => {
  return (
    <tr className="table__body-row">
      <td className="table__body-row__cell font-bold">{index}.</td>
      <td className="table__body-row__cell">{title}</td>
      <td className="table__body-row__cell flex items-center gap-x-2 overflow-hidden">
        <a
          href={solutionLink}
          className="underline__transition text-primary"
          target="_blank"
        >
          Link
        </a>
        <BiLinkExternal />
      </td>
      <td className="table__body-row__cell text-center text-xl">
        {getIcon(status)}
      </td>
      <td className="table__body-row__cell text-center text-xl">
        {getBookmarkIcon(status)}
      </td>
    </tr>
  );
};

export default TableRow;
