import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import DropDownMenu from '~/components/DropDownMenu';

const cx = classNames.bind(styles);
const MENU_DATAS = [
    {
        text: 'Learn',
        dropContent: [
            {
                text: 'What is Linea?',
                isArrow: true,
            },
            {
                text: 'Glossary',
                isArrow: true,
            },
            {
                text: 'Support',
                isArrow: true,
            },
            {
                text: 'FAQ',
                isArrow: false,
            },
        ],
    },
    {
        text: 'Build',
        dropContent: [
            {
                text: 'Documentation',
                isArrow: true,
            },
            {
                text: 'Block explorer',
                isArrow: true,
                children: [
                    {
                        text: 'Lineascan',
                        isArrow: true,
                    },
                    {
                        text: 'OKLink',
                        isArrow: true,
                    },
                    {
                        text: 'L2scan',
                        isArrow: true,
                    },
                    {
                        text: 'Social Scan',
                        isArrow: true,
                    },
                    {
                        text: 'Linea for Humans',
                        isArrow: true,
                    },
                ],
            },
            {
                text: 'Status',
                isArrow: true,
            },
            {
                text: 'Bug bounty',
                isArrow: true,
            },
        ],
    },
    {
        text: 'Ecosystem',
        dropContent: [
            {
                text: 'Applicatons',
                isArrow: false,
            },
            {
                text: 'Activation',
                isArrow: false,
            },
        ],
    },
    {
        text: 'Community',
        dropContent: [
            {
                text: 'Careers',
                isArrow: true,
            },
            {
                text: 'Help center',
                isArrow: true,
            },
            {
                text: 'Community forum',
                isArrow: false,
            },
            {
                text: 'Brand Assets',
                isArrow: false,
            },
        ],
    },
];
function Header() {
    const [isMenuButton, setMenuButton] = useState(1);

    function changeButton() {
        setMenuButton((prev) => (prev + 1) % 2);
    }
    const isMenuShow = {
        isMenuShow: !isMenuButton,
    };

    function controlScroll(state) {
        document.body.style.overflow = state === 'disable' ? 'hidden' : 'auto';
    }

    !isMenuButton ? controlScroll('disable') : controlScroll('enable');

    return (
        <header className={cx('wrapper', !isMenuButton && 'black-background')}>
            <div className={cx('container')}>
                <a className={cx('logo')} href="https://linea.build/">
                    <img
                        alt="logo"
                        style={{ width: 111, height: 32 }}
                        src="https://images.ctfassets.net/64upluvbiuck/3zG1POx5uegiZ8ELkQJq6n/f61f18f345400b4767536f949a96ce03/site-logo.svg"
                    ></img>
                </a>
                <ul className={cx('menu', isMenuShow)}>
                    {MENU_DATAS.map((data, index) => {
                        return <DropDownMenu data={data} />;
                    })}
                </ul>
                <button
                    className={cx('menu-icon')}
                    onClick={() => {
                        changeButton();
                    }}
                >
                    {isMenuButton ? (
                        <img alt="menu" src="https://linea.build/_next/static/media/menu.6ff11c98.svg"></img>
                    ) : (
                        <img alt="close" src="https://linea.build/_next/static/media/close.415da6ac.svg"></img>
                    )}
                </button>
            </div>
        </header>
    );
}

export default Header;
