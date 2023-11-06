import styles from './sixthPage.module.scss';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
const cx = classNames.bind(styles);

function SixthPage() {
    return (
        <div className={cx('wrapper')}>
            <img
                alt="right"
                width="1174"
                height="991"
                src="https://images.ctfassets.net/64upluvbiuck/1r4cLBp5b9cYmKSYgD4c0k/79c5c1553b493ab1518b6e92d4e496d7/bg-resources.png?fm=webp&w=1200&q=80"
            ></img>
            <div className={cx('container')}>
                <img alt="blue" src="https://images.ctfassets.net/64upluvbiuck/1MMatJuHCXcn8CTzJSctbg/ac73043e8c22f8b681874a0856cfe422/overlay-vertical.svg"></img>
                <div className={cx('top-text')}>
                    <h2>Developer resources</h2>
                    <p>Everything you need to get started building on Linea Mainnet, all in one place.</p>
                </div>
                <div className={cx('wrap-button')}>
                    <Button whiteBackground>START BUILDING</Button>
                    <Button type="outline" whiteBackground>
                        BRIDGE TO LINEA
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SixthPage;
