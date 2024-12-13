import React from "react";

const CustomImageLayout = () => {
  return (
    <section className="py-16 px-12 bg-gray-50">
      <h2 className="text-2xl left-11 text-gray-800 mb-6">Explore new and popular styles</h2>
      <div className="relative w-[1320px] h-[648px] mx-auto">
        {/* Image 1 */}
        <div className="absolute top-0 left-0 w-[648px] h-[648px]">
          <img
            src="/item-category 1.png"
            alt="Image 1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 2 */}
        <div className="absolute top-0 left-[672px] w-[312px] h-[312px]">
          <img
            src="/Image (2).png"
            alt="Image 2"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 3 */}
        <div className="absolute top-0 left-[1008px] w-[312px] h-[312px]">
          <img
            src="/card (1).png"
            alt="Image 3"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 4 */}
        <div className="absolute top-[336px] left-[672px] w-[312px] h-[312px]">
          <img
            src="/card.png"
            alt="Image 4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Image 5 */}
        <div className="absolute top-[336px] left-[1008px] w-[312px] h-[312px]">
          <img
            src="/card (1).png"
            alt="Image 5"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomImageLayout;
