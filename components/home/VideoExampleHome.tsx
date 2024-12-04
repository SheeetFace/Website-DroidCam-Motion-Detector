export default function VideoExampleHome() {
  return (
    <section
      aria-label="This video showcases how the DroidCam motion detection system operates in real-world scenarios."
      aria-labelledby="video-title"
      className="w-[376px] max-sm:w-80"
    >
      <div className="relative w-full h-[280px] overflow-hidden rounded-t-xl">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          className="absolute top-0 left-1/2 -translate-x-1/2"
          height="280"
          src="https://www.youtube.com/embed/qHWuTPer6aE?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=1&loop=1&playlist=qHWuTPer6aE"
          title="Demonstration of DroidCam Motion Detection Features"
          width="500"
        />
        <div className="absolute inset-0 z-10 bg-transparent" />
      </div>

      <div className="bg-zinc-900 rounded-b-xl ps-2 py-2 relative z-50">
        <h2 className="sr-only" id="video-title">
          DroidCam Motion Detection Demonstration
        </h2>
        <p className="sr-only">
          This video showcases how the DroidCam motion detection system operates
          in real-world scenarios, highlighting its accuracy and efficiency.
        </p>

        <ul className="mt-1 text-xs text-gray-500 flex flex-col items-start ">
          <li>
            <strong>Version:</strong> 1.0.0
          </li>
          <li>
            <strong>Updated:</strong> 30 November 2024
          </li>
          <li>
            <strong>Author:</strong> SheeetFace
          </li>
        </ul>
      </div>
    </section>
  );
}
