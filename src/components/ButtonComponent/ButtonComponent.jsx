import React from 'react'
import { Button } from 'antd';

const ButtonComponent = ({
    danger = false,
    disabled = false,
    loading = false,
    onClick,
    classNames,
    type,
    text = "submit",
    icon,
    style
}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            danger={danger}
            loading={loading}
            classNames={classNames}
            type={type}
            icon={icon}
            style={{ ...style, borderRadius: 0, border: "none", outline: "none" }}
        >{text}</Button>
    )
}

export default ButtonComponent;