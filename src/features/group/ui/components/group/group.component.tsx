

import { FC, useEffect, useState } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';

import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { bind } from '../../../../../core/bind';
import { useResolve } from '../../../../../core/use-resolve';
import { GroupSummary } from '../../../domain/models/group.model';
import { GetExpensesByGroupQry } from '../../../features/expense/application/get-expenses-by-group-id.qry';
import { Expense, ExpenseSummary } from '../../../features/expense/domain/models/expense';
import ExpenseComponent from '../../../features/expense/ui/expense';
import styles from './group.component.module.css';

const cx = bind(styles);

const GroupComponent: FC<GroupSummary> = ({ id, name }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const getExpensesByGroupQry = useResolve(GetExpensesByGroupQry)
  const [expenses, setExpenses] = useState<Expense[]>([])

  useEffect(() => {
getExpensesByGroupQry.execute(id).then(x => {
setExpenses(x)
})
  }, [])

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
          {expenses.map((x) => {
            return (
              <>
                <ExpenseComponent key={x.id} expense={x}></ExpenseComponent>
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
