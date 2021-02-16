import React from 'react';

const AllUser = (props) => {
    const {name,picture,email,phone}=props.user
    return (
        <div style={{border:'2px solid green'}}>
            <h2>Name :{name}</h2>
            <img style={{width:'200px',height:'200px'}} src={picture} alt={name}/>
            <p>Email: {email}</p>
            <h5>Phone-No: {phone}</h5>
            <button onClick={()=>props.handleAddUser(props.user)}>Add Me</button>
        </div>
    );
};

export default AllUser;