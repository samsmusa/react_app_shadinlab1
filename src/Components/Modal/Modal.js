import React, { useEffect, useState } from 'react';


import { useFormik } from 'formik';
import './Modal.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputText from '../InputText/InputText';
import Dropdown from '../Dropdown/Dropdown';

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

const Modal = ({addUser}) => {

    let navigate = useNavigate()

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
          user_type:'admin',
          district:''
        },
        validate,
        onSubmit: values => {
          axios.post('https://60f2479f6d44f300177885e6.mockapi.io/users', values)
          .then(res=> {
            if(res.statusText ==='Created'){
                formik.resetForm();
                document.querySelector("#closeModal").click()};
                setUser('admin')
                return addUser(res.data)

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
                    <button className="modal__header__btn" id="closeModal">X</button>
                </div>
            <div className="modal__body">
            <form onSubmit={formik.handleSubmit}>
                <div className='form-container'>
                    <InputText 
                        label ='First Name'
                        name='first_name'
                        valuefor = {formik.values.first_name}
                        error = {formik.errors.first_name}
                        onchange= {formik.handleChange}
                    ></InputText>
                    <InputText 
                        label = 'Last Name'
                        name='last_name' 
                        onchange= {formik.handleChange}
                        valuefor = {formik.values.last_name}
                        error = {formik.errors.last_name}
                    ></InputText>
                    
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="User">User type</label>
                        </div>
                    <div className="col-75">
                        <select id="user_type" name="user_type" value={formik.values.user_type} onChange={handleUserChange}
                        >
                            <option  value='admin'>admin</option>
                            <option value='employee'>employee</option>
                        </select>
                    </div>
                    </div>
                    {(user==='admin') || <Dropdown label='division' data={division} handleChangeDivision={handleChangeDivision}></Dropdown>}
                    {(user==='admin') || <Dropdown label='district' data={district} handleChangeDivision={handleChangeDistrict}></Dropdown>}
                    
                    
                    
                    
                    
            </div>
                    
        
            <div className="modal__footer">
                    <button className="modal__footer__btn" type='submit'>Save</button>
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