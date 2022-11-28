/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Table from '../Snippets/Table/Table';
import './Items.css';

const ItemsData = [
    {
        id: 1,
        itemName: 'Burger',
        count: 3,
        amount: 500,
        discount: 40,
    },
    {
        id: 2,
        itemName: 'Chicken Curry',
        count: 8,
        amount: 400,
        discount: 30,
    },
    {
        id: 3,
        itemName: 'Beaf Curry',
        count: 6,
        amount: 300,
        discount: 20,
    },
];

const Items = () => {
    const [items, setItems] = useState(ItemsData);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState();

    let fields;
    if (items) {
        fields = items.map((item) => (
            <tr key={item.id}>
                <td>{item.itemName}</td>
                <td>{item.count}</td>
                <td>
                    <span>&#2547; {item.amount}</span>
                </td>
                <td>
                    <span>&#2547; {item.discount}</span>
                </td>
                <td>
                    <div className="action-btn">
                        <Link className="edit-icon">
                            <FiEdit />
                        </Link>
                        <button className="delete-icon">
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </td>
            </tr>
        ));
    }

    const columns = ['Item Name', 'Count', 'Price', 'Discount', 'Action'];

    return (
        <div className="table-main-box">
            <div className="table-top-title">
                <h3>Items</h3>
            </div>
            <Table isLoading={isLoading} message={message} fields={fields} columns={columns} />
        </div>
    );
};

export default Items;
