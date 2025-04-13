



/*import MovieCard from '@/components/MovieCard';
import { Movie } from '@/types/Movie';


const avengersMovie: Movie = {
  imdbID: 'tt0848228',
  Title: 'The Avengers',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTk5ODI3NjU0MF5BMl5BanBnXkFtZTcwODc0NTM0Nw@@._V1_SX300.jpg',
  Year: '2012',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '8.0/10' },
    { Source: 'Rotten Tomatoes', Value: '91%' },
    { Source: 'Metacritic', Value: '69/100' }
  ],
  Trailer: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
  WatchOptions: ['Disney+', 'Amazon Prime Video']
};

export default function Home() {
  return (
    <main className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">IMDb Clone</h1>
      <MovieCard movie={avengersMovie} />
    </main>
  );
}*/






/*'use client';
import { useEffect, useState } from 'react';
import { fetchMovies } from '@/lib/fetchMovie';  // Assuming you have a function to fetch movie data
import MovieCard from '@/components/MovieCard';
import { Movie } from '../types/Movie';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies("Avengers");  // Fetching a list of movies
      if (data && data.Search) {
        setMovies(data.Search);  // Setting the movies data in state
      }
    };
    fetchData();
  }, []);

  return (
    <main className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      {movies.map((movie: Movie) => (
        //<MovieCard key={movie.imdbID} movie={movie} />

        <MovieCard movie={movie} onAddToWatchlist={addToWatchlistAction} />
      ))}
    </main>
  );
}*/







/*'use client';
import { useEffect, useState } from 'react';
import { fetchMovies } from '@/lib/fetchMovie';
import MovieCard from '@/components/MovieCard';
import { Movie } from '../types/Movie';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies("Avengers");
      if (data && data.Search) {
        setMovies(data.Search);
      }
    };
    fetchData();
  }, []);

  const addToWatchlistAction = (movie: Movie) => {
    setWatchlist(prev => [...prev, movie]);
  };

  return (
    <main className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      {movies.map((movie) => (


<MovieCard
  key={movie.imdbID}
  movie={movie}
  onAddToWatchlist={addToWatchlistAction}
  isAdded={watchlist.some(item => item.imdbID === movie.imdbID)}
/>


      
      ))}
    </main>
  );
}*/



/*'use client';
import { useEffect, useState } from 'react';
import { fetchMovies } from '@/lib/fetchMovie';  // Assuming you have a function to fetch movie data
import MovieCard from '@/components/MovieCard';
import { Movie } from '../types/Movie';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  // This function will handle adding a movie to the watchlist
  const handleAddToWatchlist = (movie: Movie) => {
    console.log("Added to Watchlist:", movie);
    alert(`${movie.Title} has been added to your Watchlist!`);

    const stored = JSON.parse(localStorage.getItem('watchlist') || '[]');
    localStorage.setItem('watchlist', JSON.stringify([...stored, movie]));
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies("Avengers");  // Fetching a list of movies
      if (data && data.Search) {
        const updatedMovies = data.Search.map((movie: Movie) => ({
          ...movie,
          Trailer: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.Title)}+trailer`
        }));
        setMovies(updatedMovies);  // Setting the movies data in state
      }
    };
    fetchData();
  }, []);

  return (
    <main className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onAddToWatchlist={handleAddToWatchlist}
        />
      ))}
    </main>
  );
}*/


/*'use client';
import { useEffect, useState } from 'react';
import { Movie } from '../types/Movie';
import MovieCard from '@/components/MovieCard';

const fetchMovies = async (searchTerm: string) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=9c1ebec4&s=${encodeURIComponent(searchTerm)}`);
  const data = await response.json();
  return data;
};

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchData = async () => {
    const data = await fetchMovies("Avengers");

    if (data && data.Search) {
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie: Movie) => {
          const detailsResponse = await fetch(`https://www.omdbapi.com/?apikey=9c1ebec4&i=${movie.imdbID}`);
          const fullDetails = await detailsResponse.json();

          return {
            ...movie,
            Ratings: fullDetails.Ratings || [],
            Trailer: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.Title)}+trailer`
          };
        })
      );
      setMovies(detailedMovies);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToWatchlist = (movie: Movie) => {
    console.log('Added to Watchlist:', movie);
  };

  return (
    <main className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onAddToWatchlist={handleAddToWatchlist}
        />
      ))}
    </main>
  );
}*/






/*'use client';
import { useEffect, useState } from 'react';
import { Movie } from '../types/Movie';
import MovieCard from '@/components/MovieCard';

const fetchMovies = async (searchTerm: string) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=9c1ebec4&s=${encodeURIComponent(searchTerm)}`);
  const data = await response.json();
  return data;
};

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  const fetchData = async () => {
    const data = await fetchMovies("Avengers");

    if (data && data.Search) {
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie: Movie) => {
          const detailsResponse = await fetch(`https://www.omdbapi.com/?apikey=9c1ebec4&i=${movie.imdbID}`);
          const fullDetails = await detailsResponse.json();

          return {
            ...movie,
            Ratings: fullDetails.Ratings || [],
            Trailer: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.Title)}+trailer`
          };
        })
      );
      setMovies(detailedMovies);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToWatchlist = (movie: Movie) => {
    if (!watchlist.some((m) => m.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
      alert(`✅ "${movie.Title}" added to Watchlist!`);
    } else {
      alert(`⚠️ "${movie.Title}" is already in your Watchlist.`);
    }
  };

  return (
    <main className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onAddToWatchlist={handleAddToWatchlist}
        />
      ))}
    </main>
  );
}*/



'use client';
import { useEffect, useState } from 'react';
import { Movie } from '../types/Movie';
import MovieCard from '@/components/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const fetchMovies = async (searchTerm: string) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=9c1ebec4&s=${encodeURIComponent(searchTerm)}`);
  const data = await response.json();
  return data;
};

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  const fetchData = async () => {
    const data = await fetchMovies("Avengers");
    if (data && data.Search) {
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie: Movie) => {
          const detailsResponse = await fetch(`https://www.omdbapi.com/?apikey=9c1ebec4&i=${movie.imdbID}`);
          const fullDetails = await detailsResponse.json();

          return {
            ...movie,
            Ratings: fullDetails.Ratings || [],
            Trailer: `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.Title)}+trailer`
          };
        })
      );
      setMovies(detailedMovies);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToWatchlist = (movie: Movie) => {
    if (!watchlist.some((m) => m.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
      alert(`✅ "${movie.Title}" added to Watchlist!`);
    } else {
      alert(`⚠️ "${movie.Title}" is already in your Watchlist.`);
    }
  };

  return (
    <div className="p-6 text-white">




  




{/* 🎬 Sony Bravia Advertisement */}
<div className="mb-6 flex justify-center">
  <a href="https://www.sony.co.in/bravia" target="_blank" rel="noopener noreferrer">
    <img
      src="/ads/sony_bravia.jpg"
      alt="Sony Bravia TV Ad"
      className="rounded-xl shadow-lg w-full md:w-3/4 object-contain"
    />
  </a>
</div>









     

      {/* 🔥 Top Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-xl mb-10"
      >
        {[
          "https://i.ytimg.com/vi/6ZfuNTqbHE8/maxresdefault.jpg",
          "https://i.ytimg.com/vi/TcMBFSGVi1c/maxresdefault.jpg",
          "https://i.ytimg.com/vi/QwievZ1Tx-8/maxresdefault.jpg"
        ].map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-94 object-cover rounded-xl shadow-lg" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Featured Videos */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">🎬 Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <iframe className="rounded" width="100%" height="200" src="https://www.youtube.com/embed/6ZfuNTqbHE8" allowFullScreen></iframe>
          <iframe className="rounded" width="100%" height="200" src="https://www.youtube.com/embed/eOrNdBpGMv8" allowFullScreen></iframe>
          <iframe className="rounded" width="100%" height="200" src="https://www.youtube.com/embed/TcMBFSGVi1c" allowFullScreen></iframe>
        </div>
      </section>

      {/* Related Videos */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">🔗 Related Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <iframe className="rounded" width="100%" height="200" src="https://www.youtube.com/embed/hA6hldpSTF8" allowFullScreen></iframe>
          <iframe className="rounded" width="100%" height="200" src="https://www.youtube.com/embed/ybji16u608U" allowFullScreen></iframe>
          <iframe className="rounded" width="100%" height="200" src="https://www.youtube.com/embed/QwievZ1Tx-8" allowFullScreen></iframe>
        </div>
      </section>

      {/* Movie Cards */}
      <main className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie: Movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onAddToWatchlist={handleAddToWatchlist}
          />
        ))}
      </main>

      {/* Back To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-yellow-500 text-black font-bold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-400 transition"
      >
        ⬆️ Top
      </button>
    </div>
  );
}





