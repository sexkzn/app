import React from 'react';
import ActionCell from '../../../components/widgets/Table/cells/ActionCell';
import ImageCell from "../../../components/widgets/Table/cells/ImageCell";

export default (onEdit, onAddPictures, onDelete) => [
  {
    title: "",
    name: 'avatar',
    key: 'avatar',
    width: 200,
    render: (value) => <ImageCell src={value.avatar} alt={value.name} width={200} height='auto' />
  },
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Действия',
    dataIndex: 'id',
    colSpan: 3,
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
      <ActionCell key={index} value={value} color='link' row={row} onClick={onAddPictures}>
        <i className='far fa-images' />
      </ActionCell>
    )
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
