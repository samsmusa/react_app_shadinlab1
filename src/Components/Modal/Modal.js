import React, { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import './Modal.css'
import axios from 'axios';

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

const Modal = () => {

    useEffect(()=>{
        let modal = document.querySelector("#myModal");
        let open = document.querySelector("#openModal");
        let close = document.querySelector("#closeModal");


        const togglefunction = (value) => {
            modal.style.display = value;
        }

        open.addEventListener("click", () => { togglefunction("flex") })
        close.addEventListener("click", () => { togglefunction("none") })
    },[])

    const [user, setUser] = useState('admin')

    const [division, setDivision] = useState([])
    const [district, setDistrict] = useState([]);
    const [divisionvalue, setDivisionvalue] = useState('null');

    useEffect(()=>{
        fetch('https://bdapis.herokuapp.com/api/v1.1/divisions')
        .then(res=>res.json())
        .then(data=>setDivision(data.data))
    },[])


    const formik = useFormik({
        initialValues: {
          first_name: '',
          last_name: '',
          division:'',
          user_type:'',
          district:''
        },
        validate,
        onSubmit: values => {
          console.log(JSON.stringify(values, null, 2));
          axios.post('https://60f2479f6d44f300177885e6.mockapi.io/users', values)
          .then(res=> {
            if(res.statusText ==='Created'){
                console.log(res)
                formik.resetForm();
                document.querySelector("#closeModal").click()}
          })
          .catch(error=> console.log(error))
        },
      });

    

    

    

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
    fetch(`https://bdapis.herokuapp.com/api/v1.1/division/${divisionvalue}`)
    .then(res=>res.json())
    .then(data=>setDistrict(data.data))
},[divisionvalue])


  
    
    return (
        <div>
            <div className="modal" id="myModal">
            <div className="modal__content">
                <div className="modal__header">
                    <button class="modal__header__btn" id="closeModal">X</button>
                </div>
            <div className="modal__body">
            <form onSubmit={formik.handleSubmit}>
                <div className='form-container'>
                    <div className="row">
                    <div className="col-25">
                        <label htmlFor='first_name'>First Name</label>
                    </div>
                    <div className="col-75">
                        <input 
                        id="first_name"
                        name="first_name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.first_name}/>
                    </div>
                    {formik.errors.first_name ? <div className='error-field'>{formik.errors.first_name}</div> : null}
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <div class="col-75">
                            <input id="last_name"
                            name="last_name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.last_name}
                        />
                        {formik.errors.last_name ? <div className='error-field'>{formik.errors.last_name}</div> : null}
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-25">
                            <label htmlFor="User">User type</label>
                        </div>
                    <div class="col-75">
                        <select id="user_type" name="user_type" value={formik.values.user_type} onChange={handleUserChange}
                        >
                            <option value='admin'>admin</option>
                            <option value='employe'>employee</option>
                        </select>
                    </div>
                    </div>
                    <div className="row">
                        
                        <div class="col-25">
                            <label for="subject">division</label>
                        </div>
                        <div class="col-75">
                        
                            {(user==='admin')? <input id="division"
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
                    </div>
                    </div>
                    <div className="row">
                        
                        <div class="col-25">
                            <label htmlFor="District">District</label>
                        </div>
                        <div class="col-75">
                        
                            {(user==='admin')? <input id="district"
                            name="district"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.district}
                        /> : <select id="district" name="district" onChange={handleChangeDistrict}>
                       
                        {
                            district.map(e=> <option value={e.district}>{e.district}</option>)
                        }
                    </select>}
                    </div>
                    </div>
                    
                    
                    
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Subject</label>
                        </div>
                    
                    </div>
            </div>
                    
        
            <div class="modal__footer">
                    <button class="modal__footer__btn" type='submit'>Save</button>
                </div>
            </form>
                        </div>
                        {/* <div class="modal__footer">
                            <button class="modal__footer__btn">Save</button>
                        </div> */}
                    </div>
                </div>
                </div>
    );
};

export default Modal;