import { ViewAllButton } from "../utils/button";
import {
  PopularCardCategory1,
  PopularCardCategory2,
  PopularCardCategory3,
  PopularCardCategory4,
  PopularCardCategory5,
  PopularCardCategory6,
  PopularCardCategory7,
  PopularCardCategory8,
} from "./PopularCategoriesCard";

const ExplorePopularCategories = () => {
  return (
    <div className="py-6 px-4 overflow-hidden bg-gray-200">
      <div className="flex flex-row items-center justify-between mb-6">
        <h2 className="text-black flex-1 text-3xl text-center mb-4">
          Explore Popular Categories Events
        </h2>
        <ViewAllButton />
      </div>

      <div className="relative w-full animate-infinite-scroll  hover:[animation-play-state:paused]">
        <div className="flex gap-4 w-full ">
          {/* set 1 */}
          <PopularCardCategory1 />
          <PopularCardCategory2 />
          <PopularCardCategory3 />
          <PopularCardCategory4 />
          <PopularCardCategory5 />
          <PopularCardCategory6 />
          <PopularCardCategory7 />
          <PopularCardCategory8 />
          {/* set 2 * for infinite loop*/}
          <PopularCardCategory1 />
          <PopularCardCategory2 />
          <PopularCardCategory3 />
          <PopularCardCategory4 />
          <PopularCardCategory5 />
          <PopularCardCategory6 />
          <PopularCardCategory7 />
          <PopularCardCategory8 />
        </div>
      </div>
    </div>
  );
};

export default ExplorePopularCategories;
