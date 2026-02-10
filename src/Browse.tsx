import Header from "./Header";

const Browse = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="src/assets/homePageBgImage.png"
          alt="Home Page Background"
        />
        <div className="text-left pt-4 z-10 relative w-2/5 ml-8 space-y-2">
          <h3 className="text-3xl tracking-wide [word-spacing:10px] text-black font-semibold ">
            Discovering Everything Happening Around You
          </h3>
          <p className="opacity-50">
            Find college events, workshops, competitions, meetups & fests near
            you in real time
          </p>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Browse;
