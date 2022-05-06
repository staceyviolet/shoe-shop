import { Link } from 'react-router-dom';

export function Category({ category, active, onClick }) {
    return (
        <li className="nav-item">
            <Link className={!active ? 'nav-link' : 'nav-link active'}
                  to={`#`}
                  onClick={onClick}>
                {category.title}
            </Link>
        </li>
    )
}

