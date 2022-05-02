import { NavLink } from 'react-router-dom';

export function TopMenuItem({ title, path }) {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={path}>{title}</NavLink>
        </li>
    )
}

