import { AiOutlineUser } from "react-icons/ai";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header flex h-20 flex-row items-center justify-between border-b border-b-font-secondary px-6 py-4 font-heading">
      <div className="logo flex h-full flex-row items-center gap-x-4">
        <div className="logo__pic aspect-square h-full">
          <img src="/logo.png" alt="logo" className="h-full" />
        </div>
        <div className="logo__title text-2xl font-bold">online IDE</div>
      </div>
      <ul className="flex flex-row items-center gap-x-4 text-lg">
        <li className="underline__transition">
          <a href="/problems">Problems</a>
        </li>
        <li className="underline__transition">
          <a href="/editor">Editor</a>
        </li>
        <li className="underline__transition text-xl">
          <a href="/profile" title="Profile">
            <AiOutlineUser />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
