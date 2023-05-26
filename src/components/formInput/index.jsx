import { useCallback } from 'react';
import './index.css'

const FormInput = ({ type, name, value, onChange, placeholder, required, disabled, style }) => {

  const formStyle = style === 'full' ? 'formInput formInput-full' : 'formInput formInput-half';

  const handleChange = useCallback((event) => onChange(event.target.value), [onChange])

  return (
    <input
      className={formStyle}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};

export default FormInput;
