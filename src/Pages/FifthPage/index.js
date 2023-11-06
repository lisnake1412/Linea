import styles from './fifthPage.module.scss'
import classNames from "classnames/bind";

import Button from '~/components/Button';

const cx = classNames.bind(styles)


function FifthPage() {
    
    return ( 
        
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left-content')}>
                    <h2>Committed to Ethereum</h2>
                    <img alt="etherium" src="https://images.ctfassets.net/64upluvbiuck/59V8XakNMCKEyeA4ZvW0pg/7eaea458f50ec2c6c685352c86adc494/ethereum.svg"></img>
                </div>
                <div className={cx('right-content')}>
                    <p>From the genesis block of Ethereum, Consensys was formed to be the strongest force for decentralization on the planet. We believe that through networks like Ethereum, humankind can achieve more. Our teams will steer the Linea project as we have other public goods, with an eye towards full decentralization and a commitment to open development.</p>
                    <div className={cx('button-wrapper')}>
                        <Button>CONSENSYS & ETHEREUM</Button>
                        <Button type="outline">VIEW ROADMAP</Button>
    
                    </div>
                </div>
            </div>
        </div>
     );
}

export default FifthPage;