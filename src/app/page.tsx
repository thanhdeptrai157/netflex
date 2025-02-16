"use client"
import { useEffect, useState } from "react";
import * as apis from '@/services/index'

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    apis.getMoviesByYear(2025, 1, 64).then((data) => {
      setMovies(data);
      console.log(data)
    });
  }, []);
  return (
    <div className="text-center mt-[20%]">
       <h1 className="text-blue-700 font-bold text-3xl">Hello netflex</h1>
    </div>
  );
}
