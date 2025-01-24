import styles from './Menu.module.css';
import MenuLink from '../MenuLink';


const Menu = ({itensMenu}) => {
    return (
        <header>
            <nav className={styles.navegacao}>
                {itensMenu.map(
                    (item) => <MenuLink key={item.id} to={item.to}>{item.value}</MenuLink>
                )}
            </nav>
        </header>
    )
}

export default Menu;