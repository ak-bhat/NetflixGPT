import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"

const GptSearchBar = () => {

  const language = useSelector((store)=> store.config.language)

  return (
    <div>
        <form className="p-2 bg-opacity-50 bg-black">
            <input className="p-4 m-4 w-72" type="text" placeholder={lang[language].placeholder} />
            <button className="py-2 px-4 rounded-lg bg-red-600 text-white">{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar