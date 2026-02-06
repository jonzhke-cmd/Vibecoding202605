// components/Hero.jsx
import React, { useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('buy'); // 'buy', 'rent', 'new-projects', 'commercial'
  const primaryRed = '#ED1C24'; // PropertyGuru Red
  const primaryText = '#222222'; // Primary text color - not directly used here but for consistency

  return (
    <section className="relative w-full py-20 md:py-32 flex items-center justify-center min-h-[500px]">
      {/* High-res Localized Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x800?text=Singapore+Cityscape')", // Placeholder
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 text-center leading-tight tracking-wide">
          Find Your Singapore Dream Home
        </h1>
        <p className="text-xl text-white text-center mb-10 opacity-90">
          Discover properties for sale, rent, and new projects across Singapore.
        </p>

        {/* Massive, Centered Search Card */}
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 lg:p-10 w-full max-w-4xl mx-auto">
          {/* Search Bar Tabs */}
          <div className="flex justify-center mb-6 border-b border-gray-200">
            {['buy', 'rent', 'new-projects', 'commercial'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-3 text-lg font-semibold capitalize transition-colors duration-200 ${
                  activeTab === tab
                    ? 'border-b-4'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={activeTab === tab ? { borderColor: primaryRed, color: primaryRed } : {}}
                onClick={() => setActiveTab(tab)}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Main Search Input */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by District, MRT Station, or Condo Name"
              className="flex-grow p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: primaryRed }}
            />
            {/* Future: Implement a dropdown or suggestion box here for districts/MRT */}
            <button
              style={{ backgroundColor: primaryRed }}
              className="text-white text-lg font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
            >
              Search
            </button>
          </div>

          {/* Horizontal Filter Bar (Simplified for now, can be expanded) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>Property Type</option>
              <option>Condo</option>
              <option>HDB</option>
              <option>Landed</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>Price Range</option>
              <option>$500k - $1M</option>
              <option>$1M - $2M</option>
              <option>$2M+</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>Bedrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
