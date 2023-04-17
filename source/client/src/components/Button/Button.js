import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ size, children, disabled, rightIcon, leftIcon, className, ...props }) {
    const classes = cx('wrapper', {
        [size]: size,
        [className]: className,
        disabled,
        rightIcon,
        leftIcon,
    });

    return (
        <button {...props} className={classes}>
            <span className={cx('title')}>{children}</span>
        </button>
    );
}

export default Button;
