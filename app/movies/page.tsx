
import { fetchMovies } from "@/lib/fetchMovie";

export default async function MoviesPage() {
  const data = await fetchMovies("Avengers");
  const movies = data.Search;

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      {movies?.map((movie: any) => (
        <div key={movie.imdbID} className="bg-gray-800 p-4 rounded shadow">
          <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded" />
          <h2 className="mt-2 text-lg font-semibold">{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}
