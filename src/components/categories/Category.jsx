import { Link } from 'react-router-dom';

export function Category({ category, className, onClick }) {
    return (
        <li className="nav-item">
            <Link className={className}
                  to={`#`}
                  onClick={onClick}>
                {category ? category.title : 'Все'}
            </Link>
        </li>
    )
}

