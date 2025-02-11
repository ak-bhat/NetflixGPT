const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-0 md:pt-48 px-12 absolute  text-white bg-gradient-to-b from-black z-10">
      <h1 className="font-bold text-lg md:text-6xl">{title}</h1>
      <p className="text-sm md:text-xl md:w-1/2 py-2 md:py-6">{overview}</p>
      <div>
        <button className="text-white mr-2 bg-gray-600 p-2 md:p-4 md:px-16 rounded-lg hover:bg-opacity-70">▶️ Play</button>
        <button className="text-white bg-gray-600 p-2 md:p-4 md:px-16 rounded-lg hover:bg-opacity-70">ℹ️ More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
