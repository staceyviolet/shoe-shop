import { useEffect }                            from 'react';
import { useDispatch, useSelector }             from 'react-redux';
import { changeOffset, changeSelectedCategory } from '../../globalState/reducers/loadCatalogReducer';
import { loadCategoriesRequest }                from '../../globalState/reducers/loadCategoriesReducer';
import { Loader }                               from '../Loader';
import { Category }                             from './Category';

export function Categories() {
    const { categories, loading, error } = useSelector(state => state.categories);
    const { selectedCategory } = useSelector(state => state.catalog);

    const allCategories = [{ id: 0, title: 'Все' }, ...categories]

    const dispatch = useDispatch()

    const handleChangeCategory = (id) => {
        dispatch(changeSelectedCategory(id))
        dispatch(changeOffset(0))
    }

    useEffect(() => {
        dispatch(loadCategoriesRequest());
    }, [dispatch])

    if (error) {
        return <p>Упс! Что-то пошло не так</p>
    }

    if (loading) {
        return <Loader/>
    }

    return allCategories.map(item => <Category key={item.id}
                                               category={item}
                                               onClick={() => handleChangeCategory(item.id)}
                                               active={selectedCategory === item.id}/>
    )
}

