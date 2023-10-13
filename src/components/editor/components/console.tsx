import { useEffect, useState } from "react";
import clsx from "clsx";
import { codeSelector, useAppSelector } from "../../../redux/store";
import Button from "../../ui/Button";
import {
  useRunMutation,
  useRunResultQuery,
} from "../../../redux/reducers/Code/codeApiSlice";
type Props = {};

const Console = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState<"tc" | "res">("tc");
  const codeState = useAppSelector(codeSelector);
  const [runCode, { isLoading }] = useRunMutation();

  const {
    data,
    error,
    isError,
    isLoading: isFetchLoading,
  } = useRunResultQuery(codeState, {
    pollingInterval: 1000,
    skip: !(codeState.fetchResult === true && codeState.submissionId !== null),
  });

  useEffect(() => {
    if (!isFetchLoading) {
      console.log(data);
    }
    if (!isError) {
      console.log(error);
    }
  }, [isFetchLoading, isError]);

  const onCodeRun = async () => {
    try {
      await runCode(codeState).unwrap();
    } catch (err) {
      console.log(err);
    }
  };
  const onCodeSubmit = () => {};

  return (
    <div className="flex w-full flex-col border-t border-font-secondary bg-yellow-500">
      <div className="flex w-full bg-surface-secondary px-6 py-2">
        <div
          className={clsx(
            "mx-2 cursor-pointer pb-1 leading-tight hover:text-font-primary",
            selectedTab === "tc"
              ? " border-b-2  border-b-white text-font-primary"
              : "text-font-tertiary",
          )}
          onClick={() => setSelectedTab("tc")}
        >
          Testcase
        </div>
        <div
          className={clsx(
            "mx-2 cursor-pointer pb-1 leading-tight hover:text-font-primary",
            selectedTab === "res"
              ? " border-b-2  border-b-white text-font-primary"
              : "text-font-tertiary",
          )}
          onClick={() => setSelectedTab("res")}
        >
          Result
        </div>
      </div>
      <div className="h-48 w-full bg-surface">
        <textarea
          title="input-area"
          className="h-full w-full bg-editor-surface p-2 text-font-primary focus:border-none"
        ></textarea>
      </div>
      <div className="toolbar flex w-full justify-between bg-surface-secondary px-6 py-2">
        <div className="console-btn ">Console</div>
        <div className="action-btn flex gap-4">
          <Button
            className="min-w-[4rem] bg-green-400 py-1"
            onClick={onCodeRun}
          >
            Run
          </Button>
          <Button className="bg-accent py-1" onClick={onCodeSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Console;
