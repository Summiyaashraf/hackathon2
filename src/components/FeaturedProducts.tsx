import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div>
          <img
            src="/Products (3).png"
            alt="Product 1"
            className="w-[312px] h-[377px] object-cover"
          />
        </div>

        {/* Product 2 */}
        <div>
          <img
            src="/Products (4).png"
            alt="Product 2"
            className="w-[312px] h-[377px] object-cover"
          />
        </div>

        {/* Product 3 */}
        <div>
          <img
            src="/Products (1).png"
            alt="Product 3"
            className="w-[312px] h-[377px] object-cover"
          />
        </div>

        {/* Product 4 */}
        <div>
          <img
            src="/Products (2).png"
            alt="Product 4"
            className="w-[312px] h-[377px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
