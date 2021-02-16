import React from 'react';

const UserInfo = (props) => {
    const cart=props.item;
    const total=cart.reduce((sum,cart)=>sum+cart.balance,0)
    return (
        <div>
            <h2>Added Person: {props.item.length}</h2>
            <h5>Anual Salary:{total}</h5>
        </div>
    );
};

export default UserInfo;