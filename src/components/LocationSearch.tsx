import { useState } from "react";
import axios from "axios";

type Place = {
  display_name: string;
  lat: string;
  lon: string;
};

const LocationSearch = ({
  onSelect,
}: {
  onSelect: (lat: number, lon: number, name: string) => void;
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Place[]>([]);

  const searchLocation = async (value: string) => {
    setQuery(value);
    if (value.length < 3) return;

    const res = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${value}`,
    );

    setResults(res.data);
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => searchLocation(e.target.value)}
        placeholder="Search your location..."
        className="w-full border rounded-lg px-3 py-2"
      />

      {results.length > 0 && (
        <div className="absolute bg-white border w-full mt-1 rounded-lg shadow max-h-60 overflow-y-auto z-50">
          {results.map((place, i) => (
            <div
              key={i}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelect(
                  Number(place.lat),
                  Number(place.lon),
                  place.display_name,
                );
                setResults([]);
                setQuery(place.display_name);
              }}
            >
              {place.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
