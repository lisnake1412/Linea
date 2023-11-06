import styles from './showBoxLists.module.scss';
import classNames from 'classnames/bind';
import ShowBox from '~/components/ShowBox';

const cx = classNames.bind(styles);

function ShowBoxLists({ datas, type }) {
    return (
        <div className={cx('wrapper')}>
            {datas.map((data, index) => {
                return (
                <ShowBox type={type} data={data}></ShowBox>
                )
            })}
        </div>
    );
}

export default ShowBoxLists;
