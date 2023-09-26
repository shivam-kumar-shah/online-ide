import {
  FocusEventHandler,
  HTMLInputTypeAttribute,
  LegacyRef,
  MouseEventHandler,
  ReactNode,
  useRef,
} from "react";

type Props = {
  type?: HTMLInputTypeAttribute;
  title: string;
  onClick: MouseEventHandler<HTMLInputElement>;
  placeholder?: string;
  icon: ReactNode;
};

const Input = ({ type = "text", title, onClick, placeholder, icon }: Props) => {
  return (
    <div className="border border-font-secondary rounded-md p-2 flex flex-row items-center gap-x-2 focus-within:border-font-tertiary">
      <span className="text-xl text-font-tertiary">{icon}</span>
      <input
        type={type}
        title={title}
        onClick={onClick}
        placeholder={placeholder}
        className="bg-transparent font-heading outline-none w-full h-full"
      />
    </div>
  );
};

export default Input;
