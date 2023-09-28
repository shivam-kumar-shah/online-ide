import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Problem } from "../../models/Problem";
import { Status } from "../../models/StatusEnum";

type Props = {};

const Table = (props: Props) => {
  const data: Problem[] = [
    {
      id: "1",
      status: Status.solved,
      title: "Problem title",
      solutionLink: "",
    },
    {
      id: "2",
      status: Status.attempted,
      title: "Problem title",
      solutionLink: "",
    },
    {
      id: "3",
      status: Status.bookmarked,
      title: "Problem title",
      solutionLink: "",
    },
    {
      id: "4",
      status: Status.none,
      title: "Problem title",
      solutionLink: "",
    },
  ];

  return (
    <table className="table min-w-full border border-font-secondary">
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
        {data.map((item, index) => (
          <TableRow index={index + 1} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
