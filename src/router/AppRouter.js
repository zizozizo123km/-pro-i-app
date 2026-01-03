import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

// --- Lazy Loaded Page Components ---
// Note: Assuming these components exist in the '../pages' directory
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const SeriesPage = lazy(() => import('../pages/SeriesPage'));
const WatchPage = lazy(() => import('../pages/WatchPage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

/**
 * Fallback component displayed while a lazy-loaded route is loading.
 */
const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-red-600">
    <Loader2 className="w-12 h-12 animate-spin mb-4" />
    <p className="text-lg font-medium">Loading نتفلكس...</p>
  </div>
);

/**
 * The main application router, handling all client-side routing.
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Main Browsing Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/series" element={<SeriesPage />} />
          
          {/* Content Viewing Route */}
          {/* mediaType can be 'movie' or 'tv' */}
          <Route path="/watch/:mediaType/:id" element={<WatchPage />} />

          {/* Utility Routes */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          {/* Catch-all Route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;