import React, { useState } from 'react';

export const SearchBar = ({ onSearch, loading = false }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        disabled={loading}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name"
      />
      <button
        onClick={handleSearch}
        disabled={loading}
      >
        Search
      </button>
    </div>
  );
}
