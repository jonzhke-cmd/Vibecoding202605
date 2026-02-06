// components/ListingCard.jsx
import React from 'react';
import { Bed, Bath, LayoutDashboard, CheckCircle, Smartphone } from 'lucide-react'; // Added Smartphone icon

const ListingCard = ({ listing }) => {
  const primaryRed = '#ED1C24'; // PropertyGuru Red
  const primaryText = '#222222'; // Primary text color

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Image Carousel (Placeholder) */}
      <div className="relative h-48 sm:h-56 md:h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {listing.verified && (
            <span style={{ backgroundColor: primaryRed }} className="text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
              <CheckCircle size={14} /> Verified
            </span>
          )}
          {/* Assuming a 'isNew' property or similar for the 'New' tag */}
          {listing.isNew && (
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        {/* Price and Property Name */}
        <h3 className="text-2xl font-extrabold mb-1" style={{ color: primaryText }}>
          S${listing.price.toLocaleString()}
        </h3>
        <p className="text-lg font-semibold text-gray-700 mb-3 leading-tight">
          {listing.title}
        </p>

        {/* Quick Specs */}
        <div className="flex items-center text-gray-600 text-sm space-x-4 mb-4">
          {listing.bedrooms && (
            <span className="flex items-center gap-1">
              <Bed size={16} /> {listing.bedrooms} Bed
            </span>
          )}
          {listing.bathrooms && (
            <span className="flex items-center gap-1">
              <Bath size={16} /> {listing.bathrooms} Bath
            </span>
          )}
          {listing.area && (
            <span className="flex items-center gap-1">
              <LayoutDashboard size={16} /> {listing.area} sqft
            </span>
          )}
        </div>

        {/* Agent Profile and WhatsApp Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
              {/* Agent Profile Circle */}
              <img src={listing.agentImage || "https://via.placeholder.com/40"} alt="Agent" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium text-gray-800">
              {listing.agentName || "Agent Name"} {/* Assuming agentName property */}
            </span>
          </div>
          <button
            style={{ backgroundColor: primaryRed }}
            className="text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity duration-300"
          >
            <Smartphone size={16} /> WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
