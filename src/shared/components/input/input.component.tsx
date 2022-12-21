

import { bind } from '../../../core/bind';
import styles from './input.module.css';

const cx = bind(styles);


const InputComponent = ({
  type,
  id,
  placeholder,
  value,
  setValue,
  required = true,
  disabled = false,
}: any) => {
  return (
    <>
      <input
        disabled={disabled}
        className={cx('input')}
        type={type}
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      ></input>
    </>
  );
};

export default InputComponent;
