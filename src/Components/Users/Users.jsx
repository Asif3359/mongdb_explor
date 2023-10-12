import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const lodeUsers = useLoaderData();
    const [users , setUsers]= useState(lodeUsers);

    const handleDelete = (_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"
        })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }

    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold'> User Have: {users.length}</h1>
            </div>
            <div>
                {
                    users.map(user => <div className='border-2 p-3 m-2 flex items-center justify-between' key={user._id} user={user}>
                        <div className='space-y-2'>
                            <h1 className='text-lg font-bold'>{user.name}</h1>
                            <h1>{user.email}</h1>
                            <h1>{user._id}</h1>
                        </div>
                        <div>
                            <button onClick={()=>handleDelete(user._id)} className='btn btn-sm'>x</button>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <Link to="/" className='btn btn-primary btn-sm'>Back To Root</Link>
            </div>
        </div>
    );
};

export default Users;