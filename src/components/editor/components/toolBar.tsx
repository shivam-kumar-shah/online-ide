import React from "react";
import { useState } from "react";
import { MdRefresh, MdSettings } from "react-icons/md";
import { useDispatch } from "react-redux";
import { codeAction } from "../../../redux/reducers/Code/codeReducer";
import { LangEnum } from "../../../redux/reducers/Code/types/code";

type Props = {};

const ToolBar = (props: Props) => {
  const [showOptionHint, setShowOptionHint] = useState({
    settings: false,
    reset: false,
  });

  const dispatch = useDispatch();

  return (
    <div className="toolbar flex w-full items-center justify-between border-b border-font-secondary bg-surface-secondary px-4 py-2">
      <div className="lang-select">
        <select
          name="lang"
          title="lang"
          className="bg-surface-secondary"
          onChange={(event) => {
            dispatch(
              codeAction.setLang(
                LangEnum[event?.target?.value as keyof typeof LangEnum],
              ),
            );
          }}
        >
          <option value={LangEnum.cpp}>C++</option>
          <option value={LangEnum.java}>JAVA</option>
          <option value={LangEnum.python}>Python3</option>
        </select>
      </div>
      <div className="tools flex gap-2 text-lg text-font-tertiary">
        <div className="relative">
          <MdSettings
            className="cursor-pointer hover:text-font-primary hover:drop-shadow-glow"
            onMouseOver={() =>
              setShowOptionHint({ ...showOptionHint, settings: true })
            }
            onMouseOut={() =>
              setShowOptionHint({ ...showOptionHint, settings: false })
            }
          />
          {showOptionHint.settings && (
            <div className="absolute left-[-1rem] top-8 z-10 rounded-lg bg-white p-1 text-sm leading-snug text-slate-900">
              Settings
            </div>
          )}
        </div>
        <div className="relative">
          <MdRefresh
            className=" cursor-pointer hover:text-font-primary  hover:drop-shadow-glow"
            onClick={() => dispatch(codeAction.setSource(""))}
            onMouseOver={() =>
              setShowOptionHint({ ...showOptionHint, reset: true })
            }
            onMouseOut={() =>
              setShowOptionHint({ ...showOptionHint, reset: false })
            }
          />
          {showOptionHint.reset && (
            <div className="absolute left-[-1rem] top-8 z-10 rounded-lg bg-white p-1 text-sm leading-snug text-slate-900">
              Reset
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
