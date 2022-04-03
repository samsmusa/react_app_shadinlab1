import React, { useEffect, useState } from 'react';
import { useLocation, useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
// import React, { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import './Edit.css'

const validate = values => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = 'Required';
    } else if (values.first_name.length > 15) {
      errors.first_name = 'Must be 15 characters or less';
    }
  
    if (!values.last_name) {
      errors.last_name = 'Required';
    } else if (values.last_name.length > 20) {
      errors.last_name = 'Must be 20 characters or less';
    }
  
    
  
    return errors;
  };



const Edit = () => {
    const loacation = useLocation()
    const [data,setData]=useState({})

    const [division, setDivision] = useState([])
    const [district, setDistrict] = useState([])

    useEffect(()=>{
        fetch('https://bdapis.herokuapp.com/api/v1.1/divisions')
        .then(res=>res.json())
        .then(data=>setDivision(data.data))
    },[])
    const [user, setUser] = useState('admin')

    const [divisionvalue, setDivisionvalue] = useState('null');
    const handleChangeDivision = (e) => {
        setDivisionvalue(e.target.value);
        formik.setFieldValue('division',e.target.value)
      };
    const handleChangeDistrict = (e) => {
    formik.setFieldValue('district',e.target.value)
    };
    const handleUserChange = (e) => {
    setUser(e.target.value);
    formik.setFieldValue('user_type',e.target.value)
    };
    

    useEffect(()=>{
        setData(loacation.state.data)
    },[])

    const formik = useFormik({
        initialValues: {
            first_name: data.first_name,
            last_name: data.last_name,
            division: data.division,
            district: data.district,
        },
        enableReinitialize: true,
        validate,
        onSubmit: values => {
            console.log(values)
            axios.put(`https://60f2479f6d44f300177885e6.mockapi.io/users/${data.id}`, values)
            .then(res=> {
                console.log(res.data.id)
                if(res.statusText ==='OK'){
                    console.log('ok');
                    <Navigate to={`/profile/${res.data.id}`} state={{data:res.data}}/>
                }
            })
            .catch(error=> console.log(error))
        },
    });

    
    const [value, setValue] = useState('null');

  const handleChange = (e) => {
      console.log(value)
    setValue(e.target.value);
  };
  

  useEffect(()=>{
    fetch(`https://bdapis.herokuapp.com/api/v1.1/division/${divisionvalue}`)
    .then(res=>res.json())
    .then(data=>setDistrict(data.data))
},[divisionvalue])
    return (
        <form onSubmit={formik.handleSubmit}>
        <div className='main'>
            <div class="profile-card">

        <div className="profile-head" >

            <img
                src="https://microlancer.lancerassets.com/v2/avatars/74/c1d56008ae11e5985a9fe42fd62f9f/medium_metro-logo-2.jpg"/>

            <input 
                className='edit-input'
                id="first_name"
                name="first_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.first_name}/>
            {formik.errors.first_name ? <div className='error-field'>{formik.errors.first_name}</div> : null}

            
            <input 
                className='edit-input'
                id="last_name"
                name="last_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.last_name}
            />
            {formik.errors.last_name ? <div className='error-field'>{formik.errors.last_name}</div> : null}
            <h2>{data.user_type}</h2>

        </div >


        <div className="profile-bio">
            <h2>
                Address
            </h2>

            <p>
            {(data.user_type==='admin')? <input id="division"
                            className='edit-input'
                            name="division"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.division}
                        /> : <select id="division" name="division"
                        onChange={handleChangeDivision}>
                       
                        {
                            division.map(e=> <option value={e.division}>{e.division}</option>)
                        }
                    </select>}
            
            </p>
            <p>
            {(data.user_type==='admin')? <input id="district"
                            className='edit-input'
                            name="district"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.district}
                        /> : <select id="district" name="district" onChange={handleChangeDistrict}>
                       
                        {
                            district.map(e=> <option value={e.district}>{e.district}</option>)
                        }
                    </select>}
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
        
    <button type="submit" className='btn-btn'>Submit</button>
    </div>
    </div>
    </form>
    );
};

export default Edit;