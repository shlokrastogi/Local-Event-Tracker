type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export const CreateEventButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 focus:outline-none cursor-pointer focus:ring-2 focus:ring-amber-400"
    >
      Create Event
    </button>
  );
};

export const SearchButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-400"
    >
      🔍︎
    </button>
  );
};

export const ExploreEventsButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-400"
    >
      🔍︎ Explore Events
    </button>
  );
};

export const HostEventButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 focus:outline-none cursor-pointer focus:ring-2 focus:ring-amber-400"
    >
      🌏︎ Host an Event
    </button>
  );
};

export const ViewAllButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-1.5 bg-blue-500 text-white px-4 rounded hover:bg-blue-600 focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-400"
    >
      View All
    </button>
  );
};
