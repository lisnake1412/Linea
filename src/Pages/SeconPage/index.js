import styles from './secondPage.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import BubbleImages from '~/components/BubbleImages';

const cx = classNames.bind(styles);

function SecondPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top-text')}>
                    <h2>Dive into the Linea Ecosystem</h2>
                    <p>See what your favorite dapps are building for Linea and start your own journey today</p>
                </div>
                <div className={cx('wrap-button')}>
                    <Button whiteBackground>EXPLORE THE ECOSYSTEM</Button>
                    <Button type="outline" whiteBackground>
                        APPLY FOR FUNDING
                    </Button>
                </div>
                <div className={cx('image-box')}>
                    <BubbleImages />
                </div>
                <div className={cx('image')}>
                    <img
                        alt="bubles"
                        src="https://images.ctfassets.net/64upluvbiuck/6hOReFx7YdVaTMVeLOJeLB/b9b7aa68509fbaef927b08fbddc19a2a/floating-mobile.png?fm=webp&w=1080&q=80"
                    ></img>
                </div>
            </div>
            <div className={cx('faded')}></div>
            <div className={cx('faded')}></div>
        </div>
    );
}

export default SecondPage;
