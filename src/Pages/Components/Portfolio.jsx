import React, { useState } from "react";
import Navbar from "../Shared/Nav/Navbar";

const Portfolio = () => {
  // Dummy data structured like an API response
  const [selectedImage, setSelectedImage] = useState(null);

  const artworkData = [
    {
      id: 1,
      url: "https://res.cloudinary.com/ddssf6cm6/image/upload/v1739955937/7_rvz2wl.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/ddssf6cm6/image/upload/v1739955937/5_pfaxh5.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/ddssf6cm6/image/upload/v1739955937/2_vrmr9p.jpg",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/ddssf6cm6/image/upload/v1739955937/4_kdja7h.jpg",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/ddssf6cm6/image/upload/v1739955937/6_p9mwnr.jpg",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/ddssf6cm6/image/upload/v1739955937/3_abl5nw.jpg",
    },
  ];

  const artistText = [
    {
      id: 1,
      heading: "Introduction",
      description:
        "J Slught is a multi-talented Liberian singer, songwriter, record producer, and actor who is making a name for himself in the music industry. With his unique blend of Afropop and traditional Liberian sounds, he is helping to promote the cultural heritage of Liberia through his music.",
    },
    {
      id: 2,
      heading: "Biography",
      description: `Born Joseph Wesseh Tah III, J Slught started Singing dancing and performing in cultural events in his high school RICKS INSTITUTE. He discovered his passion for music at a young age and began his solo career with the release of his hit single "Can't Believe". Since then, he has released several successful singles including, “Celebrate” “Oh my love” “Kill Me” “Sweet Love” “No money”, which have gained massive airplay on radio and on the streets of Monrovia.`,
    },
    {
      id: 3,
      heading: "Discography",
      description: `"Can't Believe" (single)
"Sweet Love" (single)
"No Money" (single)
 "Home & Beyond" (album)`,
    },
    {
      id: 4,
      heading: "Awards and Recognition",
      description: `"Best New Artist" at the Tunes Liberia Music Awards (2019). "Album of the Year" at the MTN Liberia Music Awards (2020)."Best RnB soul Artist at the TunesLiberia (2020). Featured on major international media houses like BBC, Front Page Africa, Music in Africa, and Eyes of a Lagos Boy`,
    },
    {
      id: 5,
      heading: "Partnerships and Collaborations",
      description: `Brand ambassador for KORUS, a fast food restaurant that serves traditional Liberian dishes. Partnered with major brands like Orange Liberia, MTN, ECHO House, Tip Me Liberia, J Palm, and Anglers Bar & Grill on several brand activation projects`,
    },
    {
      id: 6,
      heading: "Teaching and Coaching",
      description: `Teaches and coaches upcoming entertainers and artists on Liberian culture and traditional music. Has been the brain behind many of Liberia's hit songs and has inspired a new generation of artists`,
    },
    {
      id: 8,
      heading: "Performance Experience",
      description: `Performed at various cultural events and concerts in Liberia and beyond. Has a unique style of performance that blends traditional sounds with modern Afrobeats`,
    },
  ];

  return (
    <div className="">
      <div className="p-4 sm:p-8">
        {/* Artist Bio and Statement */}
        <section className="mb-8 sm:mb-12">
          <div className="max-w-2xl text-white  mx-auto text-sm sm:text-md text-center">
            {/* {artistText.map((item) => {
              <div className="" key={item.id}>
                <h1>{item.heading}</h1>
                <p>{item.description}</p>
              </div>;
            })} */}
            {artistText.map((item) => (
  <div key={item.id} className="artist-item p-6 m-2  rounded-lg  ">
    <h2 className="text-4xl font-semibold ">{item.heading}</h2>
    <p className="text-base text-justify  mt-2" style={{ whiteSpace: "pre-line" }}>
      {item.description}
    </p>
  </div>
))}

          </div>
        </section>

        {/* Best Artwork Showcase */}
        <section className="mb-8 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {artworkData.map((artwork) => (
              <div
                key={artwork.id}
                className="border-2 border-neutral-600 p-2 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(artwork.url)}
              >
                <img
                  src={artwork.url}
                  alt={artwork.id}
                  className="w-full h-48 sm:h-64 rounded-md object-cover"
                />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div
              className="p-1 fixed inset-0 bg-black bg-opacity-80 duration-500 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Selected Artwork"
                className="border-2 border-neutral-600  max-w-full max-h-full rounded-lg"
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
