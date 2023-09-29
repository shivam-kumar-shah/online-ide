import React from "react";
import { LanguageEnum } from "../../../models/LanguageEnum";
import Title from "../../ui/Title";

type Props = {};

const LanguageStats = (props: Props) => {
  return (
    <>
      <Title className="mb-2">Languages</Title>
      <ul className="flex flex-col gap-y-2">
        <li>
          <img src={LanguageEnum.c} alt="c" className="rounded-sm" />
        </li>
        <li>
          <img src={LanguageEnum.cpp} alt="cpp" className="rounded-sm" />
        </li>
        <li>
          <img src={LanguageEnum.js} alt="js" className="rounded-sm" />
        </li>
        <li>
          <img src={LanguageEnum.ts} alt="ts" className="rounded-sm" />
        </li>
        <li>
          <img src={LanguageEnum.python} alt="python" className="rounded-sm" />
        </li>
      </ul>
    </>
  );
};

export default LanguageStats;
