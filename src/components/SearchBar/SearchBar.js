import { SearchBarContainer, SearchBarInput, SearchButton, SearchInput } from "./SearchBar.styled";
import { BiSearchAlt } from 'react-icons/bi';

export const Searchbar = ({onSubmit}) => {
    return (
      <SearchBarContainer>
        <SearchBarInput onSubmit={onSubmit}>
          <SearchInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchButton type="submit">
            <BiSearchAlt />
          </SearchButton>
        </SearchBarInput>
      </SearchBarContainer>
    );
}