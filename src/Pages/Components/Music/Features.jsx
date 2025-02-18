import React from "react";

const Features = () => {
  // Dummy data for the music cards
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
    <div className="bg-blue-300">

      <div className="p-5">
        <h2 className="text-6xl font-bold text-center mb-6">Features</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {musicCards.map((card) => (
            <div
              key={card.id}
              className=" bg-black border border-neutral-600 p-2 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-3">{card.title}</h3>
              <p className="text-sm text-gray-400">{card.artist}</p>
              <div className="mt-4 space-y-2">
                <a
                  href={card.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-600  py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Purchase on Apple Music
                </a>
                <a
                  href={card.streamLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Stream Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
