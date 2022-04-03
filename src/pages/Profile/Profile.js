import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from '../../Components/Modal/Modal';
import './Profile.css'

const Profile = () => {
    const loacation = useLocation()
    const [data,setData]=useState({})

    useEffect(()=>{
        setData(loacation.state.data)
    },[]);
    return (
        <div className='main'>
            <div className="profile-card">

<div className="profile-head" >

        <img
            src="https://microlancer.lancerassets.com/v2/avatars/74/c1d56008ae11e5985a9fe42fd62f9f/medium_metro-logo-2.jpg"/>

    <h1>{data.first_name} {data.last_name}</h1>

    <h2>{data.user_type}</h2>

</div >


<div className="profile-bio">
    <h2>
        Address
    </h2>

    <p>
        Division : {data.division}
    </p>
    <p>
    District : {data.district}
    </p>

</div>

<ul className="profile-social-links">

    <li>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg"/>
    </li>

    <li>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg"/>
    </li>
    <li>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg"/>
    </li>
    </ul>
    <button className="btn-btn"><Link to={`/profile/${data.id}/edit`} state={{data:data}}>Edit</Link></button>
    </div>
    <Modal ></Modal>
    
        </div>
        
    );
};

export default Profile;