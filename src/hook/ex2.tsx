import React from 'react';

interface SearchFilterProps {
  query: string; // Assuming `query` is a string
}

const SearchFilter: React.FC<SearchFilterProps> = ({ query }) => {
  return (
    <>
      <div>
        <input placeholder="Search"></input>
      </div>
    </>
  );
};

export default SearchFilter;
