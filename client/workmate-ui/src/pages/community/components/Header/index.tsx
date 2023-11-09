import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Logo } from "../../../../assets";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import Avatar from "react-avatar";

function Header() {
  const { userState } = useAuthContext();

  const first = userState?.data?.firstname;
  const last = userState?.data?.lastname;

  return (
    <header>
      <div className="flex flex-row items-center justify-around w-full bg-[#fbfafa]">
        <div className="flex my-0 mx-10 items-center">
          <Link to="/">
            <img className="w-[11rem] h-[2.5rem]" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex  items-center bg-white mr-[10px] rounded-md px-20 py-3 border-[#2222223b]">
            <MagnifyingGlassIcon className="text-gray-500 w-4 h-4" />
            <input
              className="w-full border-none outline-none ml-[5px]"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-4 items-center py-5 px-10">
            {window.innerWidth < 768 && (
              <MagnifyingGlassIcon className="text-gray-500 w-4 h-4" />
            )}

            <Avatar size="35" round name={first + " " + last} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
