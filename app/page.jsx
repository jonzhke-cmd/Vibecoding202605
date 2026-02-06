// app/page.jsx
import Header from './components/Header';
import Hero from './components/Hero'; // This is now our SearchHero
import ListingCard from './components/ListingCard';
// import { motion } from 'framer-motion'; // Uncomment and use for Framer Motion animations

export default function HomePage() {
  // Mock data for listings - in a real app, this would come from an API or Firestore
  const listings = [
    {
      id: '1',
      image: 'https://via.placeholder.com/600x400?text=Luxury+Condo+1',
      title: 'Luxury Condo @ Orchard Road',
      price: 3500000,
      bedrooms: 3,
      bathrooms: 3,
      area: 1800,
      verified: true,
      isNew: true, // Added isNew property
      agentImage: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=AG1',
      agentName: 'Agent Alex' // Added agentName property
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/600x400?text=HDB+Flat+Tampines',
      title: 'Spacious HDB Flat in Tampines',
      price: 650000,
      bedrooms: 4,
      bathrooms: 2,
      area: 1200,
      verified: false,
      isNew: false,
      agentImage: 'https://via.placeholder.com/40/0000FF/FFFFFF?text=AG2',
      agentName: 'Agent Ben'
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/600x400?text=New+Launch+Project',
      title: 'The Grand Residences - New Launch',
      price: 2800000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1000,
      verified: true,
      isNew: true,
      agentImage: 'https://via.placeholder.com/40/00FF00/FFFFFF?text=AG3',
      agentName: 'Agent Cara'
    },
    {
        id: '4',
        image: 'https://via.placeholder.com/600x400?text=Penthouse+Sentosa',
        title: 'Exclusive Sentosa Cove Penthouse',
        price: 8500000,
        bedrooms: 5,
        bathrooms: 5,
        area: 4500,
        verified: true,
        isNew: false,
        agentImage: 'https://via.placeholder.com/40/FFFF00/000000?text=AG4',
        agentName: 'Agent David'
      },
      {
        id: '5',
        image: 'https://via.placeholder.com/600x400?text=Bungalow+Holland',
        title: 'Charming Bungalow in Holland Village',
        price: 7200000,
        bedrooms: 6,
        bathrooms: 4,
        area: 5000,
        verified: false,
        isNew: true,
        agentImage: 'https://via.placeholder.com/40/FF00FF/FFFFFF?text=AG5',
        agentName: 'Agent Emily'
      },
      {
        id: '6',
        image: 'https://via.placeholder.com/600x400?text=Condo+River+Valley',
        title: 'Modern Condo near River Valley',
        price: 2100000,
        bedrooms: 2,
        bathrooms: 2,
        area: 950,
        verified: true,
        isNew: false,
        agentImage: 'https://via.placeholder.com/40/00FFFF/000000?text=AG6',
        agentName: 'Agent Frank'
      }
  ];

  // const sectionVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  // };

  const primaryTextColor = '#222222'; // Primary text color

  return (
    <div className="flex flex-col min-h-screen font-['Inter', 'Roboto', sans-serif]"> {/* Apply font */}
      <Header />
      <main className="flex-grow">
        <Hero /> {/* Our updated Search Hero component */}

        {/* Featured Projects Section */}
        <section className="container mx-auto px-4 py-12 lg:py-16">
          <h2 className="text-4xl font-extrabold mb-8 text-center" style={{ color: primaryTextColor }}>
            Featured Projects
          </h2>
          {/* Using a 12-column grid concept with Tailwind's responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.slice(0, 3).map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>

        {/* Latest Listings Section */}
        <section className="container mx-auto px-4 py-12 lg:py-16">
          <h2 className="text-4xl font-extrabold mb-8 text-center" style={{ color: primaryTextColor }}>
            Latest Listings
          </h2>
          {/* Using a 12-column grid concept with Tailwind's responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.slice(3, 6).map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer can go here */}
      <footer className="bg-gray-800 text-white p-8 text-center">
        <p>&copy; 2026 PropertyFinder. All rights reserved.</p>
      </footer>
    </div>
  );
}
