import React from 'react';

export default function Partners() {
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

      {/* Partners Content */}
      <section className="py-24 px-4 bg-white min-h-[400px]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Partners</h1>
          <p className="text-gray-600 text-lg">Coming Soon...</p>
        </div>
      </section>
    </div>
  );
}