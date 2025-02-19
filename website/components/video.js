import { useState } from 'react';

export default function Video({src}) {
  const [interactiveMap, setInteractiveMap] = useState(false);

  return (
    <div>
      <div className="mb-20 lg:mt-12 lg:mb-28 w-full max-w-6xl mx-auto">
        <div className="relative w-full h-0 lg:overflow-hidden lg:rounded-xl" style={{paddingTop: "56.25%"}}>
          <iframe className="absolute inset-0" width="100%" height="100%" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
