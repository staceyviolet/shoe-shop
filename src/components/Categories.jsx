import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link }                     from 'react-router-dom';
import { loadCategoriesRequest }    from '../globalState/actions/actionCreators';

export function Categories({ categoryId, setCategoryId }) {
    const { categories, loading, error } = useSelector(state => state.categories);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCategoriesRequest());
    }, [])

    return (
        <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
                <Link className={categoryId !== 0 ? 'nav-link' : 'nav-link active'}
                      to={`#`}
                      onClick={() => {
                          setCategoryId(0)
                      }}>
                    Все
                </Link>
            </li>

            {categories.map(category => {
                return (
                    <li key={category.id} className={'nav-item'}>
                        <Link className={categoryId !== category.id ? 'nav-link' : 'nav-link active'}
                              to={`#`}
                              onClick={() => {
                                  setCategoryId(category.id)
                              }} strict>
                            {category.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

