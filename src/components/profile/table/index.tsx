import React from "react";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { Submission } from "../../../models/Submission";
import { LanguageEnum } from "../../../models/LanguageEnum";

type Props = {};

export const Table = (props: Props) => {
  const data: Submission[] = [
    {
      id: "1",
      title: "Pair Sum",
      date: new Date().getTime().toString(),
      language: LanguageEnum.cpp,
      submissionLink: "",
    },
    {
      id: "1",
      title: "Pair Sum",
      date: new Date().getTime().toString(),
      language: LanguageEnum.cpp,
      submissionLink: "",
    },
    {
      id: "1",
      title: "Pair Sum",
      date: new Date().getTime().toString(),
      language: LanguageEnum.cpp,
      submissionLink: "",
    },
  ];
  return (
    <table className="table min-w-full border">
      <TableHeader />
      <tbody className="table__body">
        {data.map((item, index) => (
          <TableRow index={index + 1} {...item} />
        ))}
        {data.map((item, index) => (
          <TableRow index={index + 1} {...item} />
        ))}
        {data.map((item, index) => (
          <TableRow index={index + 1} {...item} />
        ))}
        {data.map((item, index) => (
          <TableRow index={index + 1} {...item} />
        ))}
      </tbody>
    </table>
  );
};
