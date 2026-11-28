import React from 'react';

export default function Plywood() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{
          backgroundImage: `url('/europeanbirch.com/assets/source-image-01.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Resilient Birch Plywood Products for Flooring and Dieboards
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            Aesthetically pleasing and structurally sound, European Birch plywood is known for its light color, excellent strength, and affordable price. At RPL International we offer a number of different plywood products and grades, each rated for different applications around the home, like floorboards, or office. We have European Birch plywood available in multiple thicknesses between 3 mm and 40 mm. Size formats include:
          </p>
          
          <div className="mb-8">
            <h3 className="font-bold text-gray-900 mb-2">Plywood Sizing:</h3>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">• 5'x5' • 4'x8' • 8'x4' • 5'x8' • 10'x5' •</span>
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-[#C9A962] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Image */}
            <div className="w-full md:w-2/5">
              <img 
                src="/europeanbirch.com/assets/source-image-05.png" 
                alt="Logs in a Machine" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-3/5 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Plywood Categories</h2>
              <p className="mb-8 leading-relaxed">
                When it comes to finding the right grade of plywood to get the job done, we carry a variety of wood grades to ensure you have the best type for your project. Our furniture-grade plywood is suitable for UV coating to protect against fading over time, while the flooring-grade as a substrate for engineered floor manufacturing with exterior glue. We have platform plywood for veneer and high-pressure laminate layups. If you are in the laser die industry, our multi-ply solid birch dieboards have tight tolerances. We also offer multi-ply sound faced birch underlayment plywood for vinyl and tile installation in your home or commercial application.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">Brands and Pricing</h2>
              <p className="leading-relaxed">
                Whether you are a manufacturer or distributor of European or Baltic Birch plywood, you'll find in our inventory durable, highest-quality plywood at cost-effective prices. As the oldest trading partners of wood products from Europe, we know which European mills produce the best quality plywood. This lets us sell you an exceptional product at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}