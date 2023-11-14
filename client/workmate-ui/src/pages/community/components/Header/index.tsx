import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import Avatar from "react-avatar";

function Header() {
  const { userState } = useAuthContext();

  const first = userState?.data?.firstname;
  const last = userState?.data?.lastname;

  return (
    <header className="border-b">
      <div className="flex flex-row items-center justify-between px-[8rem] w-full bg-[#fbfafa]">
        <div className="flex my-0 mx-10 items-center">
          <Link to="/">
            <p className="font-bold text-xl animate-wiggle animate-once animate-ease-in-out text-gray-800">WorkMate.</p>
          </Link>
        </div>

        <div className="flex">
          <div className="flex gap-4 items-center py-4 px-10">
            <Avatar size="35" round name={first + " " + last} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
