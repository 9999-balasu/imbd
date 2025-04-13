
import { fetchMovies } from "@/lib/fetchMovie";
export default async function TVShowsPage() {
  const data = await fetchMovies("Breaking Bad");
  const shows = data.Search;

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      {shows?.map((show: any) => (
        <div key={show.imdbID} className="bg-gray-800 p-4 rounded shadow">
          <img src={show.Poster} alt={show.Title} className="w-full h-64 object-cover rounded" />
          <h2 className="mt-2 text-lg font-semibold">{show.Title}</h2>
          <p>{show.Year}</p>
        </div>
      ))}
    </div>
  );
}
