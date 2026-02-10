export const CreateEventButton = () => {
  return (
    <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400">
      Create Event
    </button>
  );
};

export const SearchButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
      🔍︎
    </button>
  );
};

export const ExploreEventsButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="p-2 bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
      🔍︎ Explore Events
    </button>
  );
};

export const HostEventButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400">
      🌏︎ Host an Event
    </button>
  );
};
