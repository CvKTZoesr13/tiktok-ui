import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            {/* <h2>Header</h2> */}
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Search */}
            </div>
        </header>
    );
}

export default Header;
