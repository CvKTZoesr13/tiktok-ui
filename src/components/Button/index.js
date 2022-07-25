import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({ to, href, primary, outline, children, onClick, ...passprops }) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
    });
    const props = {
        onClick,
        ...passprops,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
