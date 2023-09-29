import React from "react";

type Props = {};

export const TableHeader = (props: Props) => {
  return (
    <tr className="table__header border-b border-font-secondary text-left">
      <th className="table__header-cell">S.No.</th>
      <th className="table__header-cell">Question Title</th>
      <th className="table__header-cell">Submission Date</th>
      <th className="table__header-cell">Language</th>
    </tr>
  );
};
