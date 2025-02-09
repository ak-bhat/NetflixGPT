import { BACKGROUND } from "../utils/constants";
import GptMovieSuggetions from "./GptMovieSuggetions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND} alt="background" />
      </div>
      <div className="flex pt-20 justify-center">
        <GptSearchBar />
      </div>
      <div className="p-2 m-2">
          <GptMovieSuggetions />
        </div>
    </div>
  );
};

export default GptSearch;
