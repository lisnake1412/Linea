import styles from './footer.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('logo-container')}>
                <img alt="logo" src='https://images.ctfassets.net/64upluvbiuck/3jYGu3XwBgiRxNPRbzEoyh/53cbb5c2fb09ac12bc073cd15385f625/logo-icon.svg'></img>
            </div>
            <p>@2023 LINEA • A CONSENSYS FORMATION</p>
            <div className={cx('social-media')}>
                <img alt="icon" src="https://images.ctfassets.net/64upluvbiuck/4o71e7NiQ7irItnLZFDRLl/8f6739cb53863079859777939a9518de/mirror-light.svg"></img>
                <img alt="icon" src="https://images.ctfassets.net/64upluvbiuck/4S1FUtyQiSVBa2Tu2VLBxA/fda35e73744b8fd166e5cc14c15c1c4f/twitter-light.svg"></img>
                <img alt="icon" src="https://images.ctfassets.net/64upluvbiuck/2wD4gpZz1sM9UO9quViQuv/5ae90a4d9bf2186cccc8cb9ddf089434/youtube-light.svg"></img>
                <img alt="icon" src="https://images.ctfassets.net/64upluvbiuck/3dYG3HmzAqUSMNGWsTtg1L/e78de0c397905ac6bbab4e76bfc52e8a/discord-light.svg"></img>
            </div>
            <div className={cx('guide')}>
                <p>TERMS OF SERVICE</p>
                <p>PRIVACY POLICY</p>
            </div>
            
        </header>
     );
}

export default Footer;