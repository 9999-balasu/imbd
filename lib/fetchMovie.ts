// lib/fetchMovies.ts
export async function fetchMovies(searchTerm: string) {
    const apiKey = "9c1ebec4";
    const res = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
    if (!res.ok) throw new Error("Failed to fetch movies");
    return res.json();
  }
  