import React from "react";

const TopCategories = () => {
  return (
    <section className="py-16 px-12 bg-gray-50">
      {/* Heading */}
      <h2 className="w-[1920px] h-[44px] text-2xl font-bold text-gray-800 mb-6">Top Categories</h2>
      
      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category 1 */}
        <div className="bg-white rounded-md overflow-hidden">
          <img
            src="/Category (2).png"
            alt="Category 1"
            className="w-[424px] h-[424px] object-cover rounded-md"
          />
        </div>

        {/* Category 2 */}
        <div className="bg-white rounded-md overflow-hidden">
          <img
            src="/Category.png"
            alt="Category 2"
            className="w-[424px] h-[424px] object-cover rounded-md"
          />
        </div>

        {/* Category 3 */}
        <div className="bg-white rounded-md overflow-hidden">
          <img
            src="/Category (1).png"
            alt="Category 3"
            className="w-[424px] h-[424px] object-cover rounded-md"
          />

    
        </div>
        </div>
    
    </section>
    
  );
};

export default TopCategories;
