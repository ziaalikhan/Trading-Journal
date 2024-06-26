import React from 'react'
import { Table } from 'antd';




const TableComponent = ({
    pagination = false,
    rowHoverable = false,
    columns = [],
    dataSource = [],
    // size = "medium",
    loading = false,

}) => {
    return (
        <Table
            // bordered
            rowKey={(record) => record._id}
            pagination={pagination}
            rowHoverable={rowHoverable}
            columns={columns}
            dataSource={dataSource}
            loading={loading}
        // size={size}

        />
    )
}

export default TableComponent;