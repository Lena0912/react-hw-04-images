

export const Searchbar = ({onSubmit

}) => {
    return (
      <header>
        <form onSubmit={onSubmit}>
                <input
                    name='query'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    );
}