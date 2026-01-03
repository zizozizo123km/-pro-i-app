import React from 'react';
import { Play, Info } from 'lucide-react';

// Dummy data structure for content rows
const dummyRows = [
    { title: "Trending Now", items: Array(10).fill(0).map((_, i) => ({ id: i, title: `Trending Film ${i + 1}` })) },
    { title: "Continue Watching", items: Array(8).fill(0).map((_, i) => ({ id: i, title: `Watched Show ${i + 1}` })) },
    { title: "Action & Adventure", items: Array(12).fill(0).map((_, i) => ({ id: i, title: `Action Hero ${i + 1}` })) },
    { title: "Comedy Central", items: Array(9).fill(0).map((_, i) => ({ id: i, title: `Funny Guy ${i + 1}` })) },
];

/**
 * Renders a single movie card thumbnail, including hover effects.
 */
const MovieCard = ({ title }) => (
    <div className="group min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] h-36 bg-zinc-800 rounded-lg overflow-hidden cursor-pointer 
                    relative transition duration-300 transform hover:scale-[1.15] hover:z-20 shadow-xl 
                    focus:outline-none focus:ring-4 focus:ring-red-600">
        
        {/* Placeholder Thumbnail */}
        <div className="w-full h-full bg-zinc-700 flex items-center justify-center text-white text-sm font-medium transition duration-300 
                        group-hover:opacity-0">
            {title}
        </div>
        
        {/* Hover Details (Simplified) */}
        <div className="absolute inset-0 bg-zinc-900/95 p-3 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end">
            <h3 className="text-white text-lg font-bold truncate">{title}</h3>
            <div className="flex items-center gap-2 text-sm mt-1">
                <span className="text-green-400 font-semibold">98% Match</span>
                <span className="text-gray-400 border border-gray-400 px-1 text-xs">16+</span>
            </div>
        </div>
    </div>
);

/**
 * Renders a horizontally scrolling row of MovieCards.
 */
const MovieRow = ({ title, items }) => (
    <div className="mb-10 px-6 md:px-12">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4 hover:text-gray-300 transition cursor-pointer">
            {title}
        </h2>
        
        {/* Scrollable Container (Using custom utility to hide scrollbar if available) */}
        <div className="flex space-x-3 overflow-x-scroll no-scrollbar pb-4 scroll-smooth">
            {items.map((item) => (
                <MovieCard key={item.id} title={item.title} />
            ))}
        </div>
    </div>
);

/**
 * Renders the main Hero/Billboard section at the top of the page.
 */
const HeroBillboard = () => (
    <div className="relative h-[80vh] md:h-[90vh] overflow-hidden">
        
        {/* Background (Simulated via external URL/Video container) */}
        {/* Replace with actual video or high-res image */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition duration-500" 
             style={{ 
                 backgroundImage: 'url(https://images.unsplash.com/photo-1542204620-1a0e28c772e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' 
             }}>
        </div>
        
        {/* Gradient Overlay for bottom fade into the background */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 pt-40 w-full px-6 md:px-12 pb-20 z-10">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-xl max-w-lg">
                The New Age of AI
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed max-w-3xl drop-shadow-md hidden md:block">
                A thrilling documentary exploring the rise, power, and existential risks posed by rapidly advancing artificial intelligence.
            </p>
            
            <div className="flex gap-3">
                <button 
                    className="flex items-center bg-white text-zinc-950 py-2 md:py-3 px-4 md:px-6 rounded-lg text-base md:text-xl font-semibold 
                                hover:bg-opacity-80 transition duration-200">
                    <Play className="w-5 h-5 md:w-6 md:h-6 mr-2 fill-current" />
                    Play
                </button>
                <button 
                    className="flex items-center bg-gray-500 bg-opacity-70 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg text-base md:text-xl font-semibold 
                                hover:bg-opacity-50 transition duration-200">
                    <Info className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                    More Info
                </button>
            </div>
        </div>
    </div>
);

/**
 * Main Home page component for "نتفلكس"
 */
const Home = () => {
    return (
        <div className="min-h-screen bg-zinc-950">
            
            {/* 1. Hero Billboard */}
            <HeroBillboard />

            {/* 2. Content Rows (Pulled up to overlay the billboard gradient for a smooth transition) */}
            <div className="relative -mt-20 md:-mt-32 z-10 space-y-8">
                {dummyRows.map((row, index) => (
                    <MovieRow key={index} title={row.title} items={row.items} />
                ))}
            </div>

            {/* Placeholder for standard Netflix padding/footer area */}
            <div className="h-20" />
        </div>
    );
};

export default Home;