import { SearchBarContainer, SearchBarInput } from "./SearchBar.styled";


export const Searchbar = ({onSubmit

}) => {
    return (
      <SearchBarContainer>
        <SearchBarInput onSubmit={onSubmit}>
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </SearchBarInput>
      </SearchBarContainer>
    );
}