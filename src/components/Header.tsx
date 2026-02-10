import { CreateEventButton } from "../utils/button";

const Header = () => {
  return (
    <div>
      <div className="bg-linear-to-t from-blue-100 to-white h-16 w-full flex items-center justify-start gap-4 px-4 rounded">
        <div className="w-16 h-16">
          <img src="src/assets/logo.png" alt="Logo" />
        </div>
        <div>
          <h1 className="text-blue-950 text-xl font-semibold ">
            Local Event Tracker
          </h1>
        </div>
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="🔍︎  Search events..."
            className="w-full px-4 py-2 rounded-sm border border-black focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        <div className="">
          <ul className="flex gap-4">
            <li className="text-black font-medium hover:underline cursor-pointer">
              Home
            </li>
            <li className="text-black font-medium hover:underline cursor-pointer">
              Events
            </li>
            <li className="text-black font-medium hover:underline cursor-pointer">
              About
            </li>
          </ul>
        </div>
        <div className="ml-4 ">
          <CreateEventButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
