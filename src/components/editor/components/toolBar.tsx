import React from "react";
import { useState } from "react";
import { MdRefresh, MdSettings } from "react-icons/md";
type Props = {};

const ToolBar = (props: Props) => {
  const [showOptionHint, setShowOptionHint] = useState({
    settings: false,
    reset: false,
  });
  return (
    <div className="toolbar flex w-full justify-between px-6 py-4">
      <div className="lang-select">
        <select name="lang" title="lang" className="bg-editor-surface">
          <option value="c++">C++</option>
          <option value="java">JAVA</option>
          <option value="python">Python3</option>
        </select>
      </div>
      <div className="tools flex gap-2 text-lg text-font-tertiary">
        <div className="relative">
          <MdSettings
            className="hover:drop-shadow-glow cursor-pointer hover:text-font-primary"
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
            className=" hover:drop-shadow-glow cursor-pointer  hover:text-font-primary"
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
