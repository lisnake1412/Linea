import classNames from 'classnames/bind';

import styles from './dropDownMenu.module.scss';
import CrossArrow from '~/assets/icon/crossArrow.js';

const cx = classNames.bind(styles);

function DropDownMenu({ data }) {
    return (
        <>
            <li className={cx('container')}>
                <div className={cx('round-icon')}></div>
                <div className={cx('text')}>{data.text}</div>
                <div className={cx('drop-down-container')}>
                    <div className={cx('drop-down-content')}>
                        <ul>
                            {data.dropContent &&
                                data.dropContent.map((data, index) => {
                                    return (
                                        <>
                                            <li>
                                                <a href={data.link} target="blank">
                                                    {data.text}
                                                    {data.isArrow && <CrossArrow />}
                                                </a>
                                            </li>
                                            {data.children &&
                                                data.children.map((data, index) => {
                                                    return (
                                                        <a className={cx('small-list')} href={data.link}>
                                                            {data.text}
                                                            {data.isArrow && <CrossArrow />}
                                                        </a>
                                                    );
                                                })}
                                        </>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </li>
        </>
    );
}

export default DropDownMenu;
