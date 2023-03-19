"use client";

import { useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="¿What do you want to see today?"
        className="flex-1 w-full h-14 bg-transparent rounded-sm placeholder-gray-500 text-gray-500 outline-none dark:text-red-500"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-red-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
export default SearchBox;
