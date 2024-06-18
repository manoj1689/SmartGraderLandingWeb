import React from 'react';

const CenteredVideo = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl">
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="YouTube video player"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CenteredVideo;

