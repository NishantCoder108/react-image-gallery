import React, { useState } from "react";

const Search = ({ searchText }) => {
  const [text, setText] = useState("");

  function onsubmit(e) {
    e.preventDefault();

    searchText(text);
  }

  return (
    <div className="px-6 mt-3">
      <form
        onSubmit={onsubmit}
        className="flex  justify-center items-center gap-2 min-w-xs"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 sm:text-sm px-3"  placeholder="Search your text..."
        />
        <button type="submit" className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 p-2 rounded" >Search</button>
      </form>
    </div>
  );
};

export default Search;
