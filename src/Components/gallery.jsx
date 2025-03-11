import React, { useState } from "react";
import i1 from "../assets/imgs/1.jpg";
import i2 from "../assets/imgs/2.jpg";
import i3 from "../assets/imgs/3.jpg";
import i4 from "../assets/imgs/4.jpg";


const categories = [
  "All Events",
  "Birthday Parties",
  "Corporate Events",
  "Social Meetings",
  "Wedding Events",
];

const images = [
  { src: i1, category: "All Events" },
  { src: i2, category: "Wedding Events" },
  { src: i1, category: "Social Meetings" },
  { src: i2, category: "Wedding Events" },
  { src: i4, category: "Birthday Parties" },
  { src: i4, category: "Birthday Parties" },
  { src: i3, category: "Corporate Events" },
  { src: i3, category: "Corporate Events" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Events");

  const filteredImages =
    activeCategory === "All Events"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="text-center p-10 mt-20">
      {/* Section Title */}
      <h1 className="text-4xl font-light text-gray-700">
        <span className="text-orange-500 font-semibold">Events</span> Gallery
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        We make your events smart & impactful by personalized event management services.
      </p>

      {/* Category Filters */}
      <div className="flex justify-center mt-6 space-x-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-sm px-4 py-2 rounded-md ${
              activeCategory === category
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-600 hover:text-orange-500"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Event ${index}`}
            className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
