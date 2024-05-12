import React from "react";
import toast from "react-hot-toast";

interface Props {
  onSubmit: (searchQuery: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = (e.currentTarget.elements.namedItem("searchQuery") as HTMLInputElement)?.value.trim();

    if (!searchQuery) {
      toast.error("Please enter a search query");
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" aria-label="Search">
          🔍
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
