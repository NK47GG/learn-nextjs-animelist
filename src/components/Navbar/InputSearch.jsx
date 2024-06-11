"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    if (!keyword) return;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();

      router.push(`/search/${keyword}`);
    }
  };
  // const handleSearch = (e) => {
  //   if ((e.key === "Enter" || e.type === "click") && inputText.trim() !== "") {
  //     e.preventDefault();
  //     const keyword = searchRef.current.value;
  //     router.push(`/search/${keyword}`);
  //   }
  // };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  // const handleKeydown = (e) => {
  //   if (e.key == "Enter") {
  //     handleSearch(e);
  //   }
  // };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search anime..."
        className="p-2 rounded w-full"
        ref={searchRef}
        value={inputText}
        onKeyDown={handleSearch}
        onChange={handleChange}
      />
      {/* <input
        type="text"
        placeholder="Search anime..."
        className="p-2 rounded w-full"
        ref={searchRef}
        onKeyDown={handleKeydown}
      /> */}
      <button
        className={`absolute top-2 end-5 ${
          inputText.trim() === "" ? "pointer-events-none" : ""
        }`}
        onClick={handleSearch}
        disabled={inputText.trim() === ""}
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
