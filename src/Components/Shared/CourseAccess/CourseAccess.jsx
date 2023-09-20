import React, { useState } from "react";
function CourseAccess() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoList = [
    {
      title: "HTML Tutorial for Beginners: HTML Crash Course",
      id: "qz0aGYrrlhU?si=Ov66kNvV_aKTTKSB",
    },
    {
      title: "CSS Tutorial – Full Course for Beginners",
      id: "OXGznpKZ_sA?si=HSUueGODaJSHtuCQ",
    },
    {
      title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
      id: "W6NZfCO5SIk?si=CH0DwKpZwAksu73B",
    },
    {
      title: "React Course - Beginners Tutorial for React JavaScript Library",
      id: "bMknfKXIFA8?si=ppy31Aw_AY-l3gMt",
    },
  ];

  const videoUrl = selectedVideo
    ? `https://www.youtube.com/embed/${selectedVideo}`
    : "";

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="lg:flex ">
      <div className="lg:flex-row lg:w-3/5 ml-2 mr-2 ">
        <h2 className="text-lg font-semibold">Displayed video</h2>
        {selectedVideo ? (
          <iframe
            className="w-full lg:h-96"
            title="YouTube Video"
            src={videoUrl}
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-center mt-12">Select a video from the playlist</p>
        )}
      </div>
      <div className="flex-row lg:w-2/5 mt-12 lg:ml-3 ">
        <h2 className="text-xl font-semibold mb-5">
          Front-end Web development with html,css,js,Reactjs
        </h2>
        <ul>
          {videoList.map((video) => (
            <li
              key={video.id}
              className={`cursor-pointer hover:underline font-base  ${
                video.id === selectedVideo ? "text-blue-600" : ""
              }`}
              onClick={() => handleVideoClick(video.id)}
            >
              {video.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseAccess;
