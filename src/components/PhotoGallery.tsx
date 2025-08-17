import { useState } from "react";

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = [
    {
      src: "/lovable-uploads/17efbc7e-ad65-495e-a14a-4a9a1115722f.png",
      alt: "Joy sitting comfortably in a modern cafe setting",
      caption: "Your warm smile brightens every room"
    },
    {
      src: "/lovable-uploads/ff9981fd-4c62-4cf9-9278-3791f8b42139.png",
      alt: "Joy in elegant black dress in a beautiful restaurant",
      caption: "Elegance and grace personified"
    },
    {
      src: "/lovable-uploads/551892eb-80db-4434-b5aa-d61049af7742.png",
      alt: "Joy celebrating with a birthday cake",
      caption: "Making wishes come true ✨"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl font-semibold text-primary mb-4">
            Celebrating You
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-warm bg-card">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium text-sm bg-black/30 rounded-lg p-2 backdrop-blur-sm">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged photo */}
        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                className="w-full h-full object-contain rounded-2xl"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                onClick={() => setSelectedPhoto(null)}
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-medium bg-black/50 rounded-lg p-3 backdrop-blur-sm text-center">
                  {photos[selectedPhoto].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;