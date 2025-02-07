// import OpenAI from "openai";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPENAI_KEY);

// const openai = new OpenAI({
//     apiKey: process.env.REACT_APP_OPENAI_KEY,
//     dangerouslyAllowBrowser: true
    
// })

export default genAI