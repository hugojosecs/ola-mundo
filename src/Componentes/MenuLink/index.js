import styles from './MenuLink.module.css'
import { NavLink } from 'react-router';

const MenuLink = ({to, children}) => {
    // const localizacao = useLocation();
    return (
        <NavLink to={to} className={({isActive}) => `
            ${styles.link}
            ${isActive ? styles.linkDestacado : ""}
            `}>{children}</NavLink>
    )
}

export default MenuLink;

// {/* <NavLink to={to} className={`${styles.link}
// ${localizacao.pathname === to ? styles.linkDestacado : ""}
// `}>{children}</NavLink> */}