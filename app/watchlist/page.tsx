'use client';

import { useEffect, useState } from 'react';

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
}

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('watchlist');
    if (stored) {
      setWatchlist(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p className="text-white">Your watchlist is empty!</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {watchlist.map((movie) => (
            <div key={movie.imdbID} className="bg-black border border-yellow-400 p-4 rounded-lg">
              <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded" />
              <h2 className="text-lg font-semibold mt-2 text-yellow-400">{movie.Title}</h2>
              <p className="text-white">{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
