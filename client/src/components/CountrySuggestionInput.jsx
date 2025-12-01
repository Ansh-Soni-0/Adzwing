import { useState, useEffect, useRef } from "react";
import { countries } from "../data/countries";

const CountrySuggestionInput = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRef = useRef(null);

  

  useEffect(() => {
    if (input.trim() === "") {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(input.toLowerCase())
    );

    setSuggestions(filtered);
    setShowDropdown(filtered.length > 0);
    setSelectedIndex(-1);
  }, [input]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectCountry = (country) => {
    setInput(country);
    setShowDropdown(false);
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelectCountry(suggestions[selectedIndex]);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  return (
    <div className="flex items-center">
      <div className="max-w-md">
        <div>
          <div className="" ref={dropdownRef}>
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() =>
                  input && suggestions.length > 0 && setShowDropdown(true)
                }
                placeholder="Type country name..."
                className="w-[389px] pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition placeholder:text-gray-400 text-gray-800"
                required
              />
              {input && (
                <button
                  onClick={() => {
                    setInput("");
                    setSuggestions([]);
                    setShowDropdown(false);
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            {showDropdown && suggestions.length > 0 && (
              <div
                className="absolute w-full h-40 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-y-auto z-10 custom-scrollbar"
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                style={{
                  overscrollBehavior: "contain",
                  WebkitOverflowScrolling: "touch",
                  touchAction: "auto",
                }}
                
              >
                {suggestions.map((country, index) => (
                  <div
                    key={country}
                    onClick={() => handleSelectCountry(country)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`px-4 py-3 cursor-pointer transition-colors ${
                      index === selectedIndex
                        ? "bg-gray-200 text-black"
                        : "hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    {country}
                  </div>
                ))}
              </div>
            )}

            {input && suggestions.length === 0 && (
              <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10">
                <p className="text-gray-500 text-center">No countries found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrySuggestionInput;
