import React from 'react'
import { Input } from 'antd';


const InputComponent = ({
    placeholder = "Enter Your Value",
    value,
    onChange,
    type = "text",
    size = "small",
    style = {},
    disabled = false,
    classNames,
    defaultValue,
    count,
    allowClear = false
}) => {
    return (
        <Input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            size={size}
            style={{ ...style }}
            disabled={disabled}
            classNames={classNames}
            defaultValue={defaultValue}
            count={count}
            allowClear={allowClear}
        />
    )
}

export default InputComponent;