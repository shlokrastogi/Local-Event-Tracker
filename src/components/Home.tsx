import { useState } from "react";
import Header from "./Header";
import LocationSearch from "./LocationSearch";
import { SearchButton } from "../utils/button";
import { HostEventButton } from "../utils/button";
import { ExploreEventsButton } from "../utils/button";
import ExplorePopularCategories from "./ExplorePopularCategories";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null,
  );
  const [locationName, setLocationName] = useState("");
  // const [events, setEvents] = useState([]);

  return (
    <div>
      <Header />
      <div className="relative w-full mt-16">
        <img
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="src/assets/homePageBgImg.png"
          alt="Home Page Background"
        />

        <div className="text-left pt-4 z-10 relative w-2/5 ml-8 space-y-3 py-8">
          <h3 className="text-3xl tracking-wide [word-spacing:10px] text-black font-semibold">
            Discovering Everything Happening Around You
          </h3>

          <p className="opacity-50">
            Find college events, workshops, competitions, meetups & fests near
            you in real time
          </p>

          {/* Search + Button Row */}
          <div className="flex gap-2">
            <LocationSearch
              onSelect={(lat, lon, name) => {
                setCoords({ lat, lon });
                setLocationName(name);
              }}
            />

            <SearchButton onClick={() => console.log(coords)} />
          </div>
          <p className="text-sm opacity-60">
            Location:{" "}
            {locationName
              ? locationName
              : "Your location will be displayed here"}
          </p>
          <div className="flex justify-start gap-4">
            <ExploreEventsButton
              onClick={() => console.log("explore button is clicked")}
            />
            <HostEventButton onClick={() => navigate("/login")} />
          </div>
        </div>
      </div>
      <div className="">
        <ExplorePopularCategories />
      </div>
    </div>
  );
};

export default Home;
