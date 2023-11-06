import styles from './showBox.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)



function ShowBox( {data, type} ) {
    let showBoxTypes = {
        wrapper:true,
        dot:true,
        [type]:type //innitial or smallIcon
    }
    return ( 
        <div className={cx(showBoxTypes)}> 
            <div className={cx('container')}>
                <div className={cx('image-wrapper')}>
                    <img className={cx('image')} alt='icon'  src={data.ImageSource}/>
                </div>
                <div className={cx('text-container')}>
                    <h3>{data.Title}</h3>
                    <p>{data.Text}</p>
                </div>
            </div>
        </div>
    );
}

export default ShowBox;