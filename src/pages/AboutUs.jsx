import React from 'react';

export default function AboutUs() {
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

      {/* About Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            The history of RPL International goes back to 1969, when we imported the first 5x5 European Birch into the United States. As the oldest supplier of birch plywood from Europe, we are committed to providing a quality product to manufacturers and distributors like you. As the leader in FSC® certified Baltic Birch plywood, you can count on us to stand behind the materials we sell and that our plywood products are durable.
          </p>
        </div>
      </section>

      {/* Distribution & Commitment Section */}
      <section className="bg-[#C9A962] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Image */}
            <div className="w-full md:w-2/5">
              <img 
                src="/europeanbirch.com/assets/source-image-04.png" 
                alt="Stacks Of Plywood" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-3/5 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Distribution</h2>
              <p className="mb-8 leading-relaxed">
                Included with our products are multiple plywood thicknesses and grade charts to aid in prompt shipments to various locations. Our plywood distribution warehouses are located in Baltimore, Maryland; Houston, Texas; and Long Beach and Oakland, California, and we distribute nationally. All plywood is California Air Resource Board™ Phase II certified and EPA TSCA Title VI. We offer free quotes at wholesale prices in full truckload quantities. Less than truckload quantity pricing is also available upon request FOB warehouse.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">Commitment to the Future</h2>
              <p className="leading-relaxed">
                We are dedicated to the future of woodworking and the natural resources that make it possible. That is why we emphasize the support of sustainable forest growth and the use of long-lasting plywood products. Our company is firmly committed to the legal trade of birch plywood in conformance with the Lacey Act. None of the wood you buy from us was logged illegally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}