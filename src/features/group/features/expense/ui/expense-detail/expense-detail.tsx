import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { bind } from '../../../../../../core/bind';
import InputComponent from '../../../../../../shared/components/input/input.component';
import Subheader from '../../../../../../shared/components/subheader/subheader';
import { NewExpense } from '../../domain/models/expense';

import styles from './expense-detail.module.css';

const cx = bind(styles);

const ARRAY = [
    {id:1, name:'Natalia'}, {id:2, name: 'Lucia'}, {id:3, name: 'Pablo'}
]
const ExpenseDetail = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState( '');
    const [description, setDescription] = useState( '');
    const [date, setDate] = useState('');
    const [person, setPerson] = useState( '');
    const [disabled] = useState( false);
    const [operation] = useState('Añadir gasto');
    const [arrayPerson] = useState(ARRAY);


    const getTitle = (value: string) => {
        setTitle(value);
    };

    const getAmount = (value: string) => {
        setAmount(value);
    };

    const getDescription = (value: string) => {
        setDescription(value);
    };

    const getDate = (value: string) => {
        setDate(value);
    };

    const handleSubmit = (event: any) => {
    };

    const goBack = () => {
        navigate('/');
    };

    const optionList = arrayPerson?.map((persona: any, index: number) => (
        <option key={persona?.id}>{persona?.name}</option>
    ));

    const renderSelect = () => {

        if (arrayPerson?.length) {
            return (
                <>
                    <option key=''></option>
                    {optionList}
                </>
            );
        }
    };

    return (
        <>
            <div>
                <Subheader title={operation} clickedIcon={goBack}/>
            </div>
            <div className={cx('body')}>
{/*
                <form className={cx('card')} onSubmit={handleSubmit}>
                    <p className={cx('card--title')}>{operation}</p>
                    <div className={cx('card--body')}>
                        <label htmlFor='title' className={cx('card--body-item')}>
                            Título:
                            <InputComponent
                                type={'text'}
                                value={title}
                                id={'title'}
                                placeholder={'Titulo'}
                                setValue={getTitle}
                                required={true}
                                disabled={disabled}
                            ></InputComponent>
                        </label>
                        <div className={cx('item-amount')}>
                            <label htmlFor='amount' className={cx('card--body-item')}>
                                Cantidad:
                                <InputComponent
                                    type={'text'}
                                    value={amount}
                                    id={'amount'}
                                    placeholder={'Cantidad'}
                                    setValue={getAmount}
                                    required={true}
                                    disabled={disabled}
                                />
                            </label>
                        </div>
                        <label htmlFor='description' className={cx('card--body-item')}>
                            Descripción:
                            <InputComponent
                                type={'text'}
                                value={description}
                                id={'description'}
                                placeholder={'Descripción'}
                                setValue={getDescription}
                                required={false}
                                disabled={disabled}
                            />
                        </label>
                        <label htmlFor='date' className={cx('card--body-item')}>
                            Fecha:
                            <InputComponent
                                type={'text'}
                                value={date}
                                id={'date'}
                                placeholder={'Fecha'}
                                setValue={getDate}
                                required={true}
                                disabled={disabled}
                            />
                        </label>
                        <label htmlFor='person' className={cx('card--body-item')}>
                            Pagado por:
                            <select
                                name='person'
                                placeholder='Pagado por'
                                onChange={(e) => setPerson(e.target.value)}
                                required
                                defaultValue={person || ''}
                                disabled={disabled}
                            >
                                {renderSelect()}
                            </select>
                        </label>
                    </div>
                    <div className={cx('card--buttons')}>
                        <button disabled={disabled}>Guardar Gasto</button>
                    </div>
                </form>
*/}
            </div>
        </>
    );
};

export default ExpenseDetail;
