import React, { useEffect, useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import Users from '../../Components/Users/Users';
import './Employee.css'

const Employee = () => {

    const [datas, setDatas]= useState([])

    useEffect(()=> {
        fetch('https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=employee')
        .then(res=> res.json())
        .then(data=>setDatas(data))
    },[]);

    
        

    return (
        <div className='main'>
            
            <Users datas={datas}></Users>
            
            <Modal ></Modal>
        </div>
    );
};

export default Employee;