import React, { useState } from "react";

const Songs = () => {
  // Dummy data for the music cards
  const [showAll, setShowAll] = useState(false);

  const handleSeeMore = () => {
    setShowAll(true);
  };
  const musicCards = [
    {
      id: 1,
      image: "https://picsum.photos/200/300", // Dummy image URL
      title: "Song Title 1",
      artist: "Artist Name",
      purchaseLink: "https://music.apple.com", // Link to Apple Music
      streamLink: "https://open.spotify.com/artist/12345", // Link to streaming platform
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300", // Dummy image URL
      title: "Song Title 2",
      artist: "Artist Name",
      purchaseLink: "https://music.apple.com", // Link to Apple Music
      streamLink: "https://open.spotify.com/artist/12345", // Link to streaming platform
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300", // Dummy image URL
      title: "Song Title 3",
      artist: "Artist Name",
      purchaseLink: "https://music.apple.com", // Link to Apple Music
      streamLink: "https://open.spotify.com/artist/12345", // Link to streaming platform
    },
    {
      id: 4,
      image: "https://picsum.photos/200/300", // Dummy image URL
      title: "Song Title 1",
      artist: "Artist Name",
      purchaseLink: "https://music.apple.com", // Link to Apple Music
      streamLink: "https://open.spotify.com/artist/12345", // Link to streaming platform
    },
    {
      id: 5,
      image: "https://picsum.photos/200/300", // Dummy image URL
      title: "Song Title 2",
      artist: "Artist Name",
      purchaseLink: "https://music.apple.com", // Link to Apple Music
      streamLink: "https://open.spotify.com/artist/12345", // Link to streaming platform
    },
    {
      id: 6,
      image: "https://picsum.photos/200/300", // Dummy image URL
      title: "Song Title 3",
      artist: "Artist Name",
      purchaseLink: "https://music.apple.com", // Link to Apple Music
      streamLink: "https://open.spotify.com/artist/12345", // Link to streaming platform
    },
  ];

  return (
    <div className="">
      <div className="p-2">
        <h2 className="text-6xl font-bold text-center mb-6">Singles</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  gap-4 sm:gap-6">
          {musicCards.slice(0, showAll ? musicCards.length : 3).map((card) => (
            <div
              key={card.id}
              className="bg-black rounded-lg p-4 flex flex-col gap-4 "
            >
              <img
                src={card.image}
                alt={card.title}
                className=" w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-3">{card.title}</h3>
              <p className="text-sm text-gray-400">{card.artist}</p>
              <div className="mt-4 space-y-2">
                <a
                  href={card.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-600 text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Purchase on Apple Music
                </a>
                <a
                  href={card.streamLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 text-center text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Stream On Spotify
                </a>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="mt-4 text-center">
            <button
              onClick={handleSeeMore}
              className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Songs;
