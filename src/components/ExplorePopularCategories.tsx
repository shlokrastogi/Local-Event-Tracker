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
    <div className="py-4 px-2">
      <h2 className="text-black text-2xl text-center mb-2 font-semibold">
        Explore Popular Categories Events
      </h2>
      <div className="w-full flex flex-row gap-4 flex-wrap p-2 overflow-hidden">
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
  );
};

export default ExplorePopularCategories;
