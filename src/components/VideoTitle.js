const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-xl w-1/2 py-6">{overview}</p>
      <div>
        <button className="text-white mr-2 bg-gray-600 p-4 px-16 rounded-lg">▶️ Play</button>
        <button className="text-white bg-gray-600 p-4 px-16 rounded-lg">ℹ️ More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
