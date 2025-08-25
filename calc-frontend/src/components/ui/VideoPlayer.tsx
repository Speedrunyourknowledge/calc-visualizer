
interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  return (
      <video
        className="w-full aspect-video object-cover rounded-t-md"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
  );
}

export default VideoPlayer;