import React from "react";

type Props = {};

const TableHeader = (props: Props) => {
  return (
    <tr className="table__header border-b border-font-secondary text-left">
      <th className="table__header-cell">S.No.</th>
      <th className="table__header-cell">Question Title</th>
      <th className="table__header-cell">Solution</th>
      <th className="table__header-cell">Status</th>
    </tr>
  );
};

export default TableHeader;
