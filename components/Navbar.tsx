/*'use client';

import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { useState } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-amber-200 text-amber-950 px-6 py-3">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-bold text-2xl">IMDb</Link>

        <div className="relative">
          <button
            className="font-semibold"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Menu ▼
          </button>

          {showDropdown && (
            <div className="absolute mt-2 bg-black border border-yellow-400 rounded shadow-lg w-40 z-10">
              <Link href="/movies" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Movies</Link>
              <Link href="/tvshows" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">TV Shows</Link>
              <Link href="/awards" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Awards & Events</Link>
              <Link href="/watch" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Watch</Link>
              <Link href="/celebs" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Celebs</Link>
              <Link href="/community" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Community</Link>
            </div>
          )}
        </div>

        {/* Watchlist link always visible */
        /*<Link href="/watchlist" className="font-semibold hover:underline">
          Watchlist
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search IMDb"
          className="rounded px-3 py-1 text-black"
        />
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}*/






'use client';

import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { useState } from 'react';
import { Search } from 'lucide-react';  // Use lucide-react icons (clean, modern)

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-amber-200 text-amber-950 px-6 py-3 shadow-md">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-bold text-2xl">IMDb</Link>

        <div className="relative">
          <button
            className="font-semibold"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Menu ▼
          </button>

          {showDropdown && (
            <div className="absolute mt-2 bg-black border border-yellow-400 rounded shadow-lg w-40 z-10">
              <Link href="/movies" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Movies</Link>
              <Link href="/tvshows" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">TV Shows</Link>
              <Link href="/awards" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Awards & Events</Link>
              <Link href="/watch" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Watch</Link>
              <Link href="/celebs" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Celebs</Link>
              <Link href="/community" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Community</Link>
            </div>
          )}
        </div>

        <Link href="/watchlist" className="font-semibold hover:underline">
          Watchlist
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {/*<div className="relative text-black">
          <input
            type="text"
            placeholder="Search IMDb"
            className="pl-10 pr-3 py-1 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        </div>*/}




<div className="relative text-black w-64 md:w-96">
  <input
    type="text"
    placeholder="Search IMDb"
    className="pl-12 pr-4 py-2 rounded-full bg-white shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
  />
  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
</div>


        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

