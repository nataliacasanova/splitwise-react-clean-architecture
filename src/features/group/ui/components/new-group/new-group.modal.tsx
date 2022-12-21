import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bind } from "../../../../../core/bind";
import { useResolve } from "../../../../../core/use-resolve";
import InputComponent from "../../../../../shared/components/input/input.component";
import { AddGroupCmd } from "../../../application/add-group";

import styles from './new-group.modal.module.css';


const cx = bind(styles);

const NewGroupModal = ({ title, closeModal, onAddGroup }: any) => {

    const [nameGroup, setNameGroup] = useState('');
    const navigate = useNavigate();
    const addGroup = useResolve(AddGroupCmd);


    const handleSubmit = (event: any) => {
        event.preventDefault();
        addGroup.execute(nameGroup);
        closeModal();
        onAddGroup();
        navigate('/');
    }
    const getNameGroup = (nameGroup: string) => {
        setNameGroup(nameGroup);
    }

    return (
        <div className={cx('modal-wrapper')}>
            <form className={cx('modal')} onSubmit={handleSubmit}>
                <div className={cx('modal-content')}>
                    <p className={cx('modal-title')}>{title}</p>
                    <div className={cx('modal-body')}>
                        <label htmlFor='title' className={cx('modal-body-item')}>
                            Título:
                            <InputComponent
                                type={'text'}
                                value={nameGroup}
                                id={'title'}
                                placeholder={'Titulo'}
                                setValue={getNameGroup}
                                required={true}
                            ></InputComponent>
                        </label>
                    </div>
                </div>
                <div className={cx('modal-buttons')}>
                    <button>Guardar Grupo</button>
                </div>
            </form>
        </div>
    )
}

export default NewGroupModal;