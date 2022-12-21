import * as React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { bind } from '../../../core/bind';
import { ExpenseSummary } from '../../../features/group/features/expense/domain/models/expense';
import FilledBox from '../filled-box/filled-box';
import OutlineBox from '../outline-box/outline-box';
import styles from './card.module.css';

const cx = bind(styles);

const Card = (props: ExpenseSummary) => {
  const { amount, personId, title } = props || {};
  const navigate = useNavigate();

  const onClickDetail = () => {
    navigate('/card-detail', {
      state: {
        ...props,
        disabled: true,
        operation: 'Detalle de gasto',
      },
    });
  };

  return (
    <div className={cx('card-wrapper')}>
      <div className={cx('card-content')}>
        <p className={cx('card-title')}>{title}</p>
        <div className={cx('card-body')}>
          <FilledBox text={amount} />
          {/* <OutlineBox text={personId} /> */}
        </div>
      </div>
      <div onClick={() => onClickDetail()}>
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default Card;
