export default function VideoExampleHome() {
  return (
    <article
      itemScope
      className="w-[376px] max-sm:w-80"
      itemType="http://schema.org/VideoObject"
    >
      <figure className="relative w-full h-[280px] overflow-hidden rounded-t-xl">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          className="absolute top-0 left-1/2 -translate-x-1/2"
          height="280"
          itemProp="embedUrl"
          loading="lazy"
          src="https://www.youtube.com/embed/qHWuTPer6aE?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=1&loop=1&playlist=qHWuTPer6aE"
          title="Demonstration of DroidCam Motion Detection Features"
          width="500"
        />
        <div className="absolute inset-0 z-10 bg-transparent" />
      </figure>

      <aside className="bg-zinc-900 rounded-b-xl ps-2 py-2 relative z-10">
        <h2 className="sr-only" itemProp="name">
          DroidCam Motion Detection Demonstration
        </h2>
        <meta content="PT1M35S" itemProp="duration" />
        <meta content="2024-11-30" itemProp="uploadDate" />
        <meta
          content="This video showcases how the DroidCam motion detection system operates in real-world scenarios, highlighting its accuracy and efficiency."
          itemProp="description"
        />

        <dl className="mt-1 text-xs text-gray-500 grid gap-1">
          <div className="flex">
            <dt className="font-semibold mr-2">Version:</dt>
            <dd itemProp="version">1.0.0</dd>
          </div>
          <div className="flex">
            <dt className="font-semibold mr-2">Updated:</dt>
            <dd>
              <time dateTime="2024-11-30">30 November 2024</time>
            </dd>
          </div>
          <div className="flex">
            <dt className="font-semibold mr-2">Author:</dt>
            <dd>
              <span itemProp="author">SheeetFace</span>
            </dd>
          </div>
        </dl>
      </aside>
    </article>
  );
}
