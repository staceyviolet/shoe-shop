import { useDispatch, useSelector } from 'react-redux';
import { changeSearchField }        from '../../globalState/reducers/loadCatalogReducer';

export function CatalogSearchForm() {
    const { search } = useSelector(state => state.catalog);

    const dispatch = useDispatch();

    const handleChangeSearchField = (e) => {
        e.preventDefault()
        dispatch(changeSearchField(e.target.value))
    }

    return (
        <form className="catalog-search-form form-inline">
            <input className="form-control" placeholder="Поиск" value={search}
                   onChange={handleChangeSearchField}/>
        </form>
    )
}

