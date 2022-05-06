import { useEffect }                            from 'react';
import { useDispatch, useSelector }             from 'react-redux';
import { changeOffset, changeSelectedCategory } from '../../globalState/reducers/loadCatalogReducer';
import { loadCategoriesRequest }                from '../../globalState/reducers/loadCategoriesReducer';
import { Category }                             from './Category';

export function Categories() {
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
            {!error ?

             (!loading ?
              <>
                  <Category onClick={() => handleChangeCategory(0)}
                            className={category !== 0 ? 'nav-link' : 'nav-link active'}/>

                  {categories.map(category => {
                      return (
                          <Category key={category.id}
                                    category={category}
                                    onClick={() => handleChangeCategory(category.id)}
                                    className={category !== category.id ? 'nav-link' : 'nav-link active'}/>
                      )
                  })}
              </> :
              <div className="preloader">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
             )

                    : <p>Упс! Что-то пошло не так</p>
            }
        </ul>
    )
}

