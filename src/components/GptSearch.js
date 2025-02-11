import { BACKGROUND } from "../utils/constants";
import GptMovieSuggetions from "./GptMovieSuggetions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <><div className="fixed -z-10">
    <img className="h-screen object-cover md:w-screen" src={BACKGROUND} alt="background" />
  </div>
    <div className="pt-[20%] md:p-20">
      <div className="flex justify-center">
        <GptSearchBar />
      </div>
      
    </div>
    <div className="p-2 m-2">
          <GptMovieSuggetions />
        </div>
    </>
  );
};

export default GptSearch;
