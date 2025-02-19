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
      description: `J Slught is a versatile Liberian artist known for his unique fusion of Afropop, R&B, and traditional Liberian sounds. As a singer, songwriter, record producer, and actor, he uses his soulful voice and dynamic production to celebrate Liberia’s rich cultural heritage. Through chart-topping hits, electrifying performances, and global collaborations, he continues to push boundaries and elevate Liberian music on the world stage.`,
    },
    {
      id: 2,
      heading: "Biography",
      description: `
Joseph Wesseh Tah III, professionally known as J Slught, is a Liberian singer, songwriter, and performer whose soulful sound and infectious melodies have made him one of the most celebrated artists in his country’s music scene. Born on November 25, 1995, J Slught discovered his passion for music at an early age, honing his craft through singing, dancing, and performing in cultural events at Ricks Institute, where he attended high school. His breakthrough came with the release of his hit single “Can’t Believe,” which quickly garnered widespread attention and cemented his status as a rising star. Building on this success, J Slught continued to captivate audiences with a string of chart-topping singles, including “Celebrate,” “Oh My Love,” “Kill Me,” “Sweet Love,” and “No Money.” His music, characterized by heartfelt lyrics and dynamic production, has earned massive airplay on radio stations and in the streets of Monrovia, solidifying his place in the Liberian music industry. J Slught’s artistry extends beyond singles, as showcased in his highly acclaimed album, “Home & Beyond.” With a sound that blends Afropop, R&B, and traditional influences, he continues to push creative boundaries while staying true to his Liberian roots.      `,
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
                <p
                  className={`text-base mt-2 ${
                    item.id === 3 ? "text-center" : "text-justify"
                  }`}
                  style={{ whiteSpace: "pre-line" }}
                >
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
