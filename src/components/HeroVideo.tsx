interface HeroVideoProps {
  fading: boolean;
  onLoaded: () => void;
}

const videoUrl =
  "https://res.cloudinary.com/dov7jlxo5/video/upload/v1785679695/web_main_page_cwpxna.mp4";

const HeroVideo = ({ fading, onLoaded }: HeroVideoProps) => {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-night" />
      <div
        className={`
          fixed inset-0 z-0 overflow-hidden pointer-events-none
          transition-opacity duration-[2000ms]
          ${fading ? "opacity-30" : "opacity-100"}
        `}
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          onCanPlay={onLoaded}
          className="h-full w-full scale-125 object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default HeroVideo;
