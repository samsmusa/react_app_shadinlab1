import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Backdropspin from '../../Components/Backdropspin/Backdropspin';
import Modal from '../../Components/Modal/Modal';
import Users from '../../Components/Users/Users';

const Admin = () => {

    const [datas, setDatas]= useState(null)
    const [alldatas, setAllDatas]= useState([])

    useEffect(()=>{
        fetch(
            `https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=admin`
        ).then(res=>res.json()).then(data=> setAllDatas(data))
    },[])

    const fetchData = (currenPage)=>{
        fetch(
            `https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=admin&page=${currenPage}&limit=5`
        ).then(res=>res.json()).then(data=> setDatas(data))
    };

    const pageCount = Math.ceil(alldatas.length / 5);

    const handlePageClick=(data)=>{
        setDatas(null)
        let currenPage = data.selected +1;
        const dataFromServer =  fetchData(currenPage);
    };
    useEffect(()=> {
        fetch('https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=admin&page=1&limit=5')
        .then(res=> res.json())
        .then(data=>setDatas(data))
    },[]);
    const addUser = (data)=> {
        if(data.user_type==='admin'){
            let newData = [data, ...datas]
            setDatas(newData)
        }
    }
    
    return (
        <div className='main'>
            
            {datas? <Users datas={datas}></Users> : <Backdropspin></Backdropspin> }
            <ReactPaginate
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel = {'...'}
                pageCount = {pageCount}
                marginPagesDisplayed = {3}
                pageRangeDisplayed = {3}
                onPageChange = {handlePageClick}
                containerClassName = {'pagination'}
                previousClassName = {'pagination__link'}
                nextLinkClassName = {'pagination__link'}
                activeClassName = {'pagination__link--active'}
                disabledClassName={"pagination__link--disabled"}
            ></ReactPaginate>
            <Modal addUser={addUser} ></Modal>
        </div>
    );
};

export default Admin;