import { useState } from "react";
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import Modal from 'react-modal';
import { bind } from "../../../../../core/bind";
import InputComponent from "../../../../../shared/components/input/input.component";
import NewGroupModal from "../new-group/new-group.modal";
import styles from './group-actions.module.css';

const cx = bind(styles);

const GroupActionsComponent = () => {


    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);

    Modal.setAppElement('#root');

    const getValue = (value: string) => {
        setSearch(value);
    };

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    }

    const onAddGroup = () => {}

    return (<>
    <div className={cx('group-actions')}>
        <div className={cx('search-group')}>
            <InputComponent className={cx("search-group-input")}
                type={'text'}
                id={'search'}
                placeholder={'Search group...'}
                value={search}
                setValue={getValue} />
            <button className={cx('button-action')}>
                Buscar
            </button>
        </div>
        <div className={cx("add-group")}>
            <button onClick={() => openModal()} className={cx('button-action')}> Add Group
                <AiOutlineUsergroupAdd className='icon' />
            </button>
        </div>
    </div>
    <Modal isOpen={open} onRequestClose={closeModal} className={cx('add-group-modal')}>
        <NewGroupModal title={'Crear nuevo Grupo'} closeModal = {closeModal} onAddGroup={onAddGroup}></NewGroupModal>
      </Modal>
    </>
    )
};

export default GroupActionsComponent;