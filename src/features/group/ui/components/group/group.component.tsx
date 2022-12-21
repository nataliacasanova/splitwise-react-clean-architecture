

import { useState } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';

import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { bind } from '../../../../../core/bind';
import { GroupSummary } from '../../../domain/models/group.model';
import ExpenseComponent from '../../../features/expense/ui/expense';
import styles from './group.component.module.css';

const cx = bind(styles);

const GroupComponent = (props: GroupSummary) => {
  const { name, id, transactions} = props ?? {};

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  Modal.setAppElement('#root');

  const onClickAddGasto = () => {
   
  };

  const handleSubmit = (event: any) => {
  };

  const openModal =  ()=> {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const addUser = (value: any) => {
 
  };

  return (
    <>
        <div className={cx('group-wrapper')}>
          <div className={cx('group-heading')}>
            <p className={cx('group-name')}>{name}</p>
            <div className={cx('group-heading-icons')}>
              <div>
                <BsFillPersonPlusFill className={cx('icon')}
                  onClick={() => {
                    openModal();
                  }}
                />
              </div>
              <div onClick={() => onClickAddGasto()}>
                <IoIosAddCircle className={cx('icon')} style={{ fontSize: '20px' }} />
              </div>
              <div onClick={() => navigate(`/balance/${id}`)}>
                <FaBalanceScale  className={cx('icon')}style={{ fontSize: '20px' }} />
              </div>
            </div>
          </div>
          {transactions?.map((transaction: any, index) => {
            return (
              <>
                <ExpenseComponent key={index.toString()} {...transaction}></ExpenseComponent>
              </>
            );
          })}
        </div>
        <Modal isOpen={open} onRequestClose={closeModal} className={cx('modal')}>
          {/* <AddNewUser
            arrayList={personList}
            addUser={addUser}
            closeModal={closeModal}
          ></AddNewUser> */}
        </Modal>
    </>
  );
};

export default GroupComponent;
