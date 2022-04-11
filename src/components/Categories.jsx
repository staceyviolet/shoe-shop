import {NavLink} from "react-router-dom";

export function Categories({categories, onClick}) {
    return (
        <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
                <NavLink className={`nav-link`} to={`/#0`} onClick={() => {
                    onClick(0)
                }}>Все</NavLink>
            </li>
            {categories.map(category => {
                return <li key={category.id} className="nav-item">
                    <NavLink className={`nav-link`}
                             to={`#${category.id}`}
                             onClick={() => {
                                 onClick(category.id)
                             }}>{category.title}</NavLink>
                </li>
            })}
        </ul>
    )
}

