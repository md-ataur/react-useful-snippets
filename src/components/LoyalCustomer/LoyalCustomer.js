/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import './LoyalCustomer.css';

const LCustomers = [
    {
        id: 1,
        customerName: 'Robbert',
        phoneNumber: '+880 1826277656',
        amount: 500,
        discount: 50,
    },
    {
        id: 2,
        customerName: 'Jhon Doe',
        phoneNumber: '+880 15454545545',
        amount: 400,
        discount: 30,
    },
    {
        id: 3,
        customerName: 'Jane Doe',
        phoneNumber: '+880 19499549859',
        amount: 300,
        discount: 10,
    },
];

const LoyalCustomer = () => {
    const [loyalCustomers, setLoyalCustomers] = useState(LCustomers);
    const [checkedIDs, setCheckedIDs] = useState([]);
    const [allIDs, setAllIDs] = useState([]);
    const [selectedCustomers, setSelectedCustomers] = useState([]);

    // Add checked ids
    const addToCheckedIds = (id) => {
        const newArray = [...checkedIDs, id];
        setCheckedIDs(newArray);
    };

    // Remove checked ids
    const removeFromCheckedIds = (id) => {
        setCheckedIDs(checkedIDs.filter((checkedID) => checkedID !== id));
    };

    // Selected customers
    const selectCustomer = () => {
        if (loyalCustomers && checkedIDs) {
            const selectedLoyalCustomers = loyalCustomers.filter(
                (loyalCustomer) => loyalCustomer.id !== 2
            );

            // console.log(selectedLoyalCustomers);
        }
    };

    useEffect(() => {
        // create an array of allIDs
        if (loyalCustomers && loyalCustomers.length > 0) {
            const newArray = [];
            for (let i = 0; i < loyalCustomers.length; i++) {
                newArray.push(loyalCustomers[i].id);
            }
            setAllIDs(newArray);
        }
    }, [loyalCustomers, checkedIDs]);

    return (
        <>
            <div className="table-top-title">
                <h3>Loyal Customer</h3>
                <button onClick={selectCustomer} className="btn-add btn">
                    Select Customer
                </button>
            </div>
            <div className="table-area">
                <table>
                    <thead className="table-header">
                        <tr>
                            <th>
                                <input
                                    checked={checkedIDs.length === loyalCustomers.length}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setCheckedIDs(allIDs);
                                        } else {
                                            setCheckedIDs([]);
                                        }
                                    }}
                                    type="checkbox"
                                />
                            </th>
                            <th>Customer</th>
                            <th>Phone Number</th>
                            <th>Amaount</th>
                            <th>Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loyalCustomers &&
                            loyalCustomers.map((customer) => (
                                <tr key={customer.id}>
                                    <td>
                                        <input
                                            checked={checkedIDs.includes(customer.id)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    addToCheckedIds(customer.id);
                                                } else {
                                                    removeFromCheckedIds(customer.id);
                                                }
                                            }}
                                            type="checkbox"
                                        />
                                    </td>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.phoneNumber}</td>
                                    <td>
                                        <span>&#2547; {customer.amount}</span>
                                    </td>
                                    <td>
                                        <span>&#2547; {customer.discount}</span>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default LoyalCustomer;
