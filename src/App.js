import React from 'react';
import { Search, Bell, ChevronDown, Play, Info } from 'lucide-react';

// --- MOCK DATA ---
const mockMovies = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  title: `Movie ${i + 1}`,
  posterUrl: `https://via.placeholder.com/300x450?text=Poster+${i + 1}`,
  isWide: i % 5 === 0, // Mock wider posters occasionally
}));

const categories = [
  'Trending Now',
  'New Releases',
  'Watch Again',
  'Top Picks for You',
  'Critically Acclaimed',
];
// --- END MOCK DATA ---

/**
 * Renders the main navigation bar.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 z-50 w-full transition duration-300 ease-in-out ${
    isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
  }`;

  return (
    <header className={navClasses}>
      <div className="flex items-center justify-between h-16 px-4 md:px-10 lg:px-16">
        {/* Left Section: Logo and Primary Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo (Netflix-style) */}
          <span className="text-4xl font-bold text-[#e50914] cursor-pointer">N</span>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-6 text-sm">
            {['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'].map((item) => (
              <a 
                key={item}
                href="#" 
                className={`text-white transition duration-300 ${item === 'Home' ? 'font-bold' : 'text-gray-300 hover:text-gray-100'}`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile/Tablet Dropdown */}
          <div className="lg:hidden text-white text-sm flex items-center cursor-pointer hover:text-gray-300">
            Browse
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
        </div>

        {/* Right Section: Icons and Profile */}
        <div className="flex items-center space-x-4 md:space-x-6 text-white">
          <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition duration-150" />
          <span className="hidden md:inline text-sm cursor-pointer hover:text-gray-300 transition duration-150">Kids</span>
          <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300 transition duration-150" />
          
          {/* Profile Dropdown */}
          <div className="group relative flex items-center cursor-pointer">
            <img 
              src="https://via.placeholder.com/32" 
              alt="Profile" 
              className="rounded w-8 h-8 object-cover"
            />
            <ChevronDown className="w-4 h-4 ml-1 transition duration-200 group-hover:rotate-180" />
            
            {/* Simple Dropdown Mockup */}
            <div className="absolute right-0 top-full mt-4 w-40 bg-black/80 backdrop-blur-sm p-2 text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                <a href="#" className="block py-1 hover:underline">Manage Profiles</a>
                <a href="#" className="block py-1 hover:underline">Account</a>
                <a href="#" className="block py-1 hover:underline">Sign Out</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

/**
 * Renders the featured movie/show banner (Hero).
 */
const Hero = () => {
  return (
    <div className="relative h-[65vh] lg:h-[90vh] bg-cover bg-center" style={{ backgroundImage: `url(https://via.placeholder.com/1920x1080?text=Featured+Movie+Background)` }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute bottom-[25%] left-4 md:left-16 lg:left-20 text-white w-3/4 md:w-1/2">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg">
          The Last Warrior
        </h1>
        <p className="hidden md:block text-base lg:text-lg mb-8 line-clamp-3 drop-shadow-md">
          A veteran warrior must protect the last remaining magical artifacts from a sinister cult seeking to plunge the world into eternal darkness. High stakes, epic battles, and a twist you won't see coming.
        </p>
        
        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="flex items-center px-6 py-2 rounded-md text-lg font-semibold bg-white text-black hover:bg-white/80 transition duration-300">
            <Play className="w-6 h-6 mr-2 fill-black" />
            Play
          </button>
          <button className="flex items-center px-6 py-2 rounded-md text-lg font-semibold bg-gray-500/70 text-white hover:bg-gray-500/50 transition duration-300">
            <Info className="w-6 h-6 mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Renders a single scrollable row of content posters.
 */
const ContentRow = ({ title, movies }) => {
  return (
    <div className="mb-8 px-4 md:px-10 lg:px-16">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-3 hover:text-gray-300 cursor-pointer transition duration-150">
        {title}
        <ChevronDown className="w-5 h-5 inline ml-2 opacity-0 hover:opacity-100 transition duration-300" />
      </h2>
      
      {/* Horizontal Scroll Container */}
      <div className="flex space-x-3 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className={`relative flex-shrink-0 cursor-pointer transition duration-300 transform hover:scale-[1.05] hover:z-20 group rounded overflow-hidden shadow-lg`}
            style={{ 
                width: movie.isWide ? '300px' : '150px', // Standard poster width
                height: movie.isWide ? '168.75px' : '225px', // Aspect ratio 16:9 for wide, 2:3 for standard
            }}
          >
            <img 
              src={movie.posterUrl} 
              alt={movie.title} 
              className="w-full h-full object-cover rounded"
            />
            {/* Hover details (Hidden on mobile for simplicity) */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-2">
                <span className='text-sm font-semibold'>{movie.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const Footer = () => {
    return (
        <footer className="py-12 px-4 md:px-16 text-gray-400 text-sm">
            <div className="max-w-4xl mx-auto">
                {/* Social Icons Placeholder */}
                <div className="flex space-x-4 mb-6">
                    {/* Placeholder for social media icons */}
                    <Bell className='w-6 h-6 hover:text-white transition duration-150 cursor-pointer'/>
                    <Search className='w-6 h-6 hover:text-white transition duration-150 cursor-pointer'/>
                    <Info className='w-6 h-6 hover:text-white transition duration-150 cursor-pointer'/>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {['Audio Description', 'Investor Relations', 'Legal Notices', 'Help Center', 'Jobs', 'Cookie Preferences', 'Gift Cards', 'Terms of Use', 'Corporate Information', 'Media Center', 'Privacy', 'Contact Us'].map(link => (
                        <a key={link} href="#" className="hover:underline text-xs">{link}</a>
                    ))}
                </div>

                {/* Service Code */}
                <button className="border border-gray-500 text-gray-400 px-3 py-1 text-xs mb-6 hover:text-white transition duration-150">
                    Service Code
                </button>

                {/* Copyright */}
                <p className="text-xs">
                    &copy; 1997-{new Date().getFullYear()} Netflix Clone, Inc.
                </p>
            </div>
        </footer>
    )
}

/**
 * Main application component for the Netflix Clone (نتفلكس).
 */
function App() {
  return (
    <div className="min-h-screen bg-black antialiased">
      {/* Custom Scrollbar Hide Utility (usually configured globally in index.css, but added here for self-containment) */}
      <style global jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      
      <Navbar />
      
      <main className="pt-0">
        <Hero />
        
        {/* Content Rows Offset */}
        <div className="-mt-32 relative z-10 space-y-10 pb-16">
          {categories.map((category, index) => (
            <ContentRow 
              key={category} 
              title={category} 
              // Simple dynamic subsetting of mock data
              movies={mockMovies.slice(index * 3, index * 3 + 15)} 
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;