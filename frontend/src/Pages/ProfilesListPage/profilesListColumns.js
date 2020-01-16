import React from 'react';
import ActionCell from '../../components/Table/cells';

export default (onEdit, onDelete) => [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Действия',
    dataIndex: 'id',
    colSpan: 2,
    key: 'id',
    width: 30,
    render: (value, row, index) => (
      <ActionCell
        key={index}
        value={value}
        color="link"
        row={row}
        onClick={onEdit}
      >
        <i className="fa fa-edit" />
      </ActionCell>
    ),
  },
  {
    title: '',
    colSpan: 0,
    dataIndex: 'id',
    key: 'id',
    width: 30,
    render: (value, row, index) => (
      <ActionCell
        key={index}
        value={value}
        color="link"
        row={row}
        onClick={onDelete}
      >
        <i className="fa fa-times" />
      </ActionCell>
    ),
  },
];
