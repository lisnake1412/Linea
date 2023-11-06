import styles from './firstPage.module.scss'
import classNames from "classnames/bind";

import Button from '~/components/Button';
import Header from '~/components/Layout/Header';
const cx = classNames.bind(styles)

function FirstPage() {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <div className={cx('left-container')}>
                    <div className={cx('left-content')}>
                        <h1>A developer-ready <br/>zkEVM rollup for scaling Ethereum dapps</h1>
                        <div className={cx('button-wrapper')}>
                            <Button href="https://docs.linea.build/">START BUILDING</Button>
                            <Button type="outline" href="https://docs.linea.build/">BRIDGE TO LINEA</Button>
                        </div>
                    </div>
                    
                </div>
                <div className={cx('right-image')}>
                    <img alt="hero-home"  src="https://images.ctfassets.net/64upluvbiuck/2TsaOFjA6WSv2UdSHh75iS/2c4c11f0b6d2eb28a05e9e916f80a9c2/hero-home.png?fm=webp&w=750&q=80"/>
                </div>
                <div className={cx('bottom-wrapper')}>
                    <div className={cx('bottom-container')}>
                        <img alt='left-img' src='https://images.ctfassets.net/64upluvbiuck/1MMatJuHCXcn8CTzJSctbg/ac73043e8c22f8b681874a0856cfe422/overlay-vertical.svg'></img>
                        <div className={cx('bg-img-mobile')}>
                            <div>
                                <img alt="litte-blue" src='https://images.ctfassets.net/64upluvbiuck/5nZTYsCnpQ159zGLksX2Pi/11fbae54b3a84516c763dffdf7606b65/hero-overlay.png?fm=webp&w=256&q=80'/>
                            </div>
                            <img alt="bg-img" src='https://images.ctfassets.net/64upluvbiuck/3NZcD5Asix3Vqrej6GUzF1/0220870fb68dc928704eee12a812180c/hero-home-mobile.png?fm=webp&w=1080&q=80' />
                        </div>
                        <div className={cx('text-box')}>
                            <div >
                                <h2>Linea Voyage</h2>
                            </div>
                            <div>
                                <p>Linea celebrated its mainnet release with one of the largest collective onchain actions in Ethereum history, recognizing the Linea Voyage community with a commemorative NFT collection. For more details see </p>
                                <a href="https://linea.mirror.xyz/035Bre3MXYfXIHSoBhYy5Usb3737DfovRwq95DhYrKc">here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}

export default FirstPage;