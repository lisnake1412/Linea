import styles from './fourthPage.module.scss'
import classNames from "classnames/bind";

import ShowBoxLists from '~/components/ShowBoxLists';

const cx = classNames.bind(styles)

const SHOW_BOXS_DATA = [
    {
        ImageSource:"https://images.ctfassets.net/64upluvbiuck/6MQzXAHtmczVTnfNGcHWgh/e01a0224ab2abd18e90c5f7d5d9bed89/metamask-fox.11b1aab7_2.svg",
        Title:"MetaMask",
        Text:"Deep integration with MetaMask simplifies user onboarding and exposes dapps directly to 30mm monthly active users"
    },
    {
        ImageSource:"https://images.ctfassets.net/64upluvbiuck/6v8UjENmMCiAYSBXVdsBvQ/41e87be420207c3f458a49fe797681f9/Infura.svg",
        Title:"Infura",
        Text:"Supported by the largest web3 infrastructure provider for optimal reliability and scalability"
    },
    {
        ImageSource:"https://images.ctfassets.net/64upluvbiuck/123FXJ1TGUUFZsSvTMe4dC/a1658696ef0159627378e057ce55f881/besu.svg",
        Title:"Besu",
        Text:"Optimized execution for zkEVM transactions using Ethereum battle-tested components"
    },

]

function FourthPage() {
    return ( 

        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img alt="img" src="https://images.ctfassets.net/64upluvbiuck/2sIQNd16TgZ4E8n40n0Rit/62def9da8c75f0a4c73ede214b7133dd/overlay.svg"></img>
                <div className={cx('top-text')}>
                <p>POWERED BY CONSENSYS</p>
                    <h1>Developer friendly design to build, test and launch dapps faster</h1>
                </div>
                <div className={cx('three-box')}>
                    <ShowBoxLists type="smallIcon" datas={SHOW_BOXS_DATA}/>
                </div>
            </div>
        </div>
     );
}

export default FourthPage;