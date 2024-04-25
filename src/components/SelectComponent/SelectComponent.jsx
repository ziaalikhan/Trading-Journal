import React from 'react'
import { Select } from "antd";

const SelectComponent = (
    {
        defaultValue = "lucy",
        style = {},
        options = [
            {
                value: 'jack',
                label: 'Jack',
            },
            {
                value: 'lucy',
                label: 'Lucy',
            },
            {
                value: 'Yiminghe',
                label: 'yiminghe',
            }
        ],
        allowClear = false,
        loading = false,
        placeholder,
        showSearch = true,
        size = "small",
        value,
        onChange
    }
) => {
    return (
        <Select
            defaultValue={defaultValue}
            style={style}
            options={options}
            allowClear={allowClear}
            loading={loading}
            placeholder={placeholder}
            showSearch={showSearch}
            size={size}
            value={value}
            onChange={onChange}
        />
    )
}

export default SelectComponent;