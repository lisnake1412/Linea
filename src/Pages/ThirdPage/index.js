import styles from './thirdPage.module.scss'
import classNames from "classnames/bind";

import ShowBoxLists from '~/components/ShowBoxLists';

const cx = classNames.bind(styles)

const SHOW_BOXS_DATA = [
    {
        ImageSource:"https://images.ctfassets.net/64upluvbiuck/5fokr8HYUoAmqdYm0WH3x9/190cde336050487e4611f27957082c5f/secure.svg",
        Title:"Next gen scalability",
        Text:"Low gas fees and low latency with high throughput backed by the security of Ethereum."
    },
    {
        ImageSource:"https://images.ctfassets.net/64upluvbiuck/1ft7QHVKSQlNFfPmoR35oz/e2dc87ffd7bc46bfe3dcc8e9d3736246/evm.svg",
        Title:"Developer ready",
        Text:"Fully compatible with popular tools, infrastructure, IDEs and wallets with MetaMask distribution and EVM equivalence"
    },
    {
        ImageSource:"https://images.ctfassets.net/64upluvbiuck/5PMtJxUoSHpjVTz2lOx3VL/2a9c35cd1b97490ab79e8c25adbde4ba/flash.svg",
        Title:"Unrivalled performance",
        Text:"Award winning prover enables fast finality and trustless withdrawals in minutes"
    },

]

function ThirdPage() {
    return ( 
        <div className={cx('container')}>
            <div className={cx('top-text')}>
                <h1>Scale Ethereum dapps with the tools you know and love</h1>
            </div>
            <div className={cx('three-box')}>
                <ShowBoxLists datas={SHOW_BOXS_DATA}/>
            </div>
        </div>
     );
}

export default ThirdPage;