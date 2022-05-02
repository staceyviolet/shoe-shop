import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link }                                                        from 'react-router-dom';
import { changeOffset, changeSelectedCategory, loadCategoriesRequest } from '../globalState/actions/actionCreators';

export function Categories(props) {
    const { categories, loading, error } = useSelector(state => state.categories);
    const { category } = useSelector(state => state.catalog);

    const dispatch = useDispatch()

    const handleChangeCategory = (id) => {
        dispatch(changeSelectedCategory(id))
        dispatch(changeOffset(0))
    }

    useEffect(() => {
        dispatch(loadCategoriesRequest());
    }, [dispatch])

    return (
        <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
                <Link className={category !== 0 ? 'nav-link' : 'nav-link active'}
                      to={`#`}
                      onClick={() => {
                          handleChangeCategory(0)
                      }}>
                    Все
                </Link>
            </li>

            {categories.map(category => {
                return (
                    <li key={category.id} className={'nav-item'}>
                        <Link className={category !== category.id ? 'nav-link' : 'nav-link active'}
                              to={`#`}
                              onClick={() => {
                                  handleChangeCategory(category.id)
                              }} strict>
                            {category.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

