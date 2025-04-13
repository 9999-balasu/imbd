/*'use client';
import { useState } from 'react';
import { Movie } from '../types/Movie';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [isAdded, setIsAdded] = useState(false);

  const addToWatchlist = () => {
    setWatchlist(prev => [...prev, movie]);
    setIsAdded(true);
  };

  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded" />
      <h2 className="mt-2 text-lg font-semibold text-yellow-400">{movie.Title}</h2>
      <p className="text-gray-300">{movie.Year}</p>

      <div className="mt-2 text-sm text-gray-400">
        <strong>Ratings:</strong>
        {movie.Ratings.length > 0 ? (
          movie.Ratings.map((rating, index) => (
            <p key={index}>{rating.Source}: {rating.Value}</p>
          ))
        ) : (
          <p>No ratings available.</p>
        )}
      </div>

      {movie.WatchOptions?.length ? (
        <div className="mt-2 text-sm text-gray-400">
          <strong>Watch On:</strong>
          <ul>
            {movie.WatchOptions.map((platform, index) => (
              <li key={index}>{platform}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-sm text-gray-400">No watch options available.</p>
      )}

      {movie.Trailer ? (
        <a href={movie.Trailer} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-400 underline">
          Watch Trailer
        </a>
      ) : (
        <p className="text-sm text-gray-400">No trailer available</p>
      )}

      <button
        className={`mt-4 px-4 py-2 rounded ${isAdded ? 'bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-black`}
        onClick={addToWatchlist}
        disabled={isAdded}
      >
        {isAdded ? 'Added!' : 'Add to Watchlist'}
      </button>
    </div>
  );
}*/



/*
'use client';
import { Movie } from '../types/Movie';



interface MovieCardProps {
  movie: Movie;
  onAddToWatchlistAction: (movie: Movie) => void;
}



export default function MovieCard({ movie, onAddToWatchlist, isAdded }: MovieCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      {/* Check if image URL is correct */
     {/* <img 
        src={movie.Poster} 
        alt={movie.Title} 
        className="w-full h-64 object-cover rounded" 
        onError={(e) => e.currentTarget.src = "https://via.placeholder.com/300x450?text=Image+Not+Available"}  // Fallback in case the image fails to load
      />*/}

/*<img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded"
        onError={(e) =>
          (e.currentTarget.src =
            'https://via.placeholder.com/300x450?text=Image+Not+Available')
        }
      />



      <h2 className="mt-2 text-lg font-semibold text-yellow-400">{movie.Title}</h2>
      <p className="text-gray-300">{movie.Year}</p>

     { /*<div className="mt-2 text-sm text-gray-400">
        <strong>Ratings:</strong>
        {movie.Ratings.length > 0 ? (
          movie.Ratings.map((rating, index) => (
            <p key={index}>{rating.Source}: {rating.Value}</p>
          ))
        ) : (
          <p>No ratings available.</p>
        )}
      </div>*/




/*<div className="mt-2 text-sm text-gray-400">
  <strong>Ratings:</strong>
  {Array.isArray(movie.Ratings) && movie.Ratings.length > 0 ? (
    movie.Ratings.map((rating, index) => (
      <p key={index}>
        {rating.Source}: {rating.Value}
      </p>
    ))
  ) : (
    <p>No ratings available.</p>
  )}
</div>


      {movie.WatchOptions?.length ? (
        <div className="mt-2 text-sm text-gray-400">
          <strong>Watch On:</strong>
          <ul>
            {movie.WatchOptions.map((platform, index) => (
              <li key={index}>{platform}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-sm text-gray-400">No watch options available.</p>
      )}

      {movie.Trailer ? (
        <a href={movie.Trailer} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-400 underline">
          Watch Trailer
        </a>
      ) : (
        <p className="text-sm text-gray-400">No trailer available</p>
      )}

      <button
        className={`mt-4 px-4 py-2 rounded ${isAdded ? 'bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-black`}
        onClick={() => onAddToWatchlist(movie)}
        disabled={isAdded}
      >
        {isAdded ? 'Added!' : 'Add to Watchlist'}
      </button>



      
    </div>
  );
}
*/


/*'use client';
import { useState } from 'react';
import { Movie } from '../types/Movie';

interface MovieCardProps {
  movie: Movie;
  onAddToWatchlist: (movie: Movie) => void;
}

export default function MovieCard({ movie, onAddToWatchlist }: MovieCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToWatchlist = () => {
    onAddToWatchlist(movie);
    setIsAdded(true);
  };

  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      {/* Display Movie Poster */
     /* <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded"
        onError={(e) =>
          (e.currentTarget.src =
            'https://via.placeholder.com/300x450?text=Image+Not+Available')
        }
      />
      <h2 className="mt-2 text-lg font-semibold text-yellow-400">{movie.Title}</h2>
      <p className="text-gray-300">{movie.Year}</p>

      {/* Displaying Ratings */
     /* <div className="mt-2 text-sm text-gray-400">
        <strong>Ratings:</strong>
        {Array.isArray(movie.Ratings) && movie.Ratings.length > 0 ? (
          movie.Ratings.map((rating, index) => (
            <p key={index}>
              {rating.Source}: {rating.Value}
            </p>
          ))
        ) : (
          <p>No ratings available.</p>
        )}
      </div>

      {/* Display Watch Options */
     /* {movie.WatchOptions?.length ? (
        <div className="mt-2 text-sm text-gray-400">
          <strong>Watch On:</strong>
          <ul>
            {movie.WatchOptions.map((platform, index) => (
              <li key={index}>{platform}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-sm text-gray-400">No watch options available.</p>
      )}

      {/* Display Trailer */
    /*  {movie.Trailer ? (
        <a
          href={movie.Trailer}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-400 underline"
        >
          Watch Trailer
        </a>
      ) : (
        <p className="text-sm text-gray-400">No trailer available.</p>
      )}

      {/* Add to Watchlist Button */
      /*<button
        className={`mt-4 px-4 py-2 rounded ${
          isAdded ? 'bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'
        } text-black`}
        onClick={handleAddToWatchlist}
        disabled={isAdded}
      >
        {isAdded ? 'Added!' : 'Add to Watchlist'}
      </button>
    </div>
  );
}*/





import { Movie } from '../types/Movie';

interface MovieCardProps {
  movie: Movie;
  onAddToWatchlist: (movie: Movie) => void;
}

export default function MovieCard({ movie, onAddToWatchlist }: MovieCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded"
        onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/300x450?text=Image+Not+Available'}
      />

      <h2 className="mt-2 text-lg font-semibold text-yellow-400">{movie.Title}</h2>
      <p className="text-gray-300">{movie.Year}</p>

      {/* Add Rating Display */}
      <div className="mt-2 text-sm text-gray-400">
        <strong>Ratings:</strong>
        {movie.Ratings && movie.Ratings.length > 0 ? (
          movie.Ratings.map((rating, index) => (
            <p key={index}>{rating.Source}: {rating.Value}</p>
          ))
        ) : (
          <p>No ratings available.</p>
        )}
      </div>

      {movie.Trailer ? (
        <a href={movie.Trailer} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-400 underline">
          Watch Trailer
        </a>
      ) : (
        <p className="text-sm text-gray-400">No trailer available</p>
      )}

      <button
        className="mt-4 px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-black"
        onClick={() => onAddToWatchlist(movie)}
      >
        Add to Watchlist
      </button>
    </div>
  );
}


     