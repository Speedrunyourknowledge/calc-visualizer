import React from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer = React.memo(({ videoUrl }: VideoPlayerProps) => {
  return (
      <video
        className="w-full object-cover rounded-t-md"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
  );
})

export default VideoPlayer;