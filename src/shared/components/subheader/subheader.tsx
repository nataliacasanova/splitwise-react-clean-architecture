

import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { bind } from '../../../core/bind';

import styles from './subheader.module.css';

const cx = bind(styles);
interface SubheaderModel {
    title: string;
    clickedIcon: () => void;
}

const Subheader = ({ title, clickedIcon }: SubheaderModel) => {
    return (
        <div className={cx('subheader')}>
            <div className={cx('subheader-icon')} onClick={() => clickedIcon()}>
                <AiOutlineArrowLeft style={{ fontSize: '20px' }} />
            </div>
            <p className={cx('subheader-title')}>{title}</p>
        </div>
    );
};

export default Subheader;
