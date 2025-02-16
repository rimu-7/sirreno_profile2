import React from "react";

const Portfolio = () => {
  // Dummy data structured like an API response
  const artworkData = [
    {
      id: 1,
      url: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      url: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      url: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      url: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      url: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      url: "https://picsum.photos/200/300",
    },
  ];

  const artistBio = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  `;

  const artistStatement = `
    My art is a reflection of my journey through life, capturing moments of emotion, beauty, and chaos. I strive to create pieces that resonate with the viewer on a deep, personal level, evoking feelings of nostalgia, wonder, and introspection.
  `;

  return (
    <div className="p-4 sm:p-8">
      {/* Artist Bio and Statement */}
      <section className="mb-8 sm:mb-12">
        <div className="max-w-2xl mx-auto text-sm sm:text-md text-center">
          <p className="text-gray-300 mb-4">{artistBio}</p>
          <p className="text-gray-400 italic">{artistStatement}</p>
        </div>
      </section>

      {/* Best Artwork Showcase */}
      <section className="mb-8 sm:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {artworkData.map((artwork) => (
            <div
              className="border-2 border-neutral-600 p-2 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              key={artwork.id}
            >
              <img
                src={artwork.url}
                alt={artwork.id}
                className="w-full h-48 sm:h-64 rounded-md object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
