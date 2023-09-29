import React from "react";
import { Submission } from "../../../models/Submission";
import { BiLinkExternal } from "react-icons/bi";

interface Props extends Submission {
  index: number;
}

export const TableRow = ({
  date,
  language,
  submissionLink,
  title,
  index,
}: Props) => {
  return (
    <tr className="table__body-row">
      <td className="table__body-row__cell font-bold">{index}.</td>
      <td className="table__body-row__cell">{title}</td>
      <td className="table__body-row__cell">{date}</td>
      <td className="table__body-row__cell">
        <img src={language} alt="language" className="rounded-sm" />
      </td>
      <td className="table__body-row__cell flex items-center gap-x-2 overflow-hidden">
        <a
          href={submissionLink}
          className="underline__transition text-primary"
          target="_blank"
        >
          Link
        </a>
        <BiLinkExternal />
      </td>
    </tr>
  );
};
