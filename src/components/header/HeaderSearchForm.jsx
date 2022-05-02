export function HeaderSearchForm({ showSearch, onChange, value }) {
    return (
        <form data-id="search-form"
              className={`header-controls-search-form form-inline ${!showSearch ? 'invisible' : ''}`}>
            <input className="form-control" placeholder="Поиск" value={value}
                   onChange={onChange}/>
        </form>
    )
}

