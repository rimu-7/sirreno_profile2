import React, { useState, useEffect } from "react";

const Songs = () => {
  const [musicCards, setMusicCards] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch("https://profile-2-backend-server.vercel.app/api/music"); // Change this to your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch songs");
        }
        const data = await response.json();
        setMusicCards(data); // Assuming API returns an array of music objects
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMusic();
  }, []);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  return (
    <div className="p-2">
      <h2 className="text-6xl font-bold text-center mb-6">Singles</h2>

      {loading && <p className="text-center text-gray-500">Loading songs...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {musicCards.slice(0, showAll ? musicCards.length : 3).map((card) => (
            <div
              key={card._id} // Assuming MongoDB generates `_id`
              className="bg-black rounded-lg p-4 flex flex-col gap-4"
            >
              <img
                src={card.image} // Assuming API provides an image URL
                alt={card.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-3">{card.title}</h3>
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
      )}

      {!showAll && musicCards.length > 3 && (
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
  );
};

export default Songs;
