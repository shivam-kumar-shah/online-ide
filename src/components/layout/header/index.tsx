import { AiOutlineUser } from "react-icons/ai";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header px-6 py-4 border-b-font-secondary border-b font-heading flex flex-row items-center justify-between h-20">
      <div className="logo h-full flex flex-row items-center gap-x-4">
        <div className="logo__pic h-full aspect-square">
          <img src="/logo.png" alt="logo" className="h-full" />
        </div>
        <div className="logo__title font-bold text-2xl">online IDE</div>
      </div>
      <ul className="flex flex-row gap-x-4 items-center text-lg">
        <li className="underline__transition">Problems</li>
        <li className="underline__transition">Editor</li>
        <li className="underline__transition text-xl">
          <AiOutlineUser />
        </li>
      </ul>
    </div>
  );
};

export default Header;
