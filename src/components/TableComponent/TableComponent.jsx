import React from 'react'
import { Table } from 'antd';




const TableComponent = ({
    pagination = false,
    rowHoverable = false,
    columns = [],
    dataSource = [],
    // size = "medium",
    loading = false,
    style,
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
            style={style}
            scroll={{ x: "max-content" }}
        // size={size}

        />
    )
}

export default TableComponent;