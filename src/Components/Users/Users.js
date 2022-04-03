import React from 'react';
import { Link } from 'react-router-dom';

import './Users.css'

const Users = ({datas}) => {
    return (
        <div>
            <div className="flex-container">
        <table className="table">
            <thead className="thead">
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
            {
                datas.map(e=> <tr key={e.id}>
                    <td data-title="First Name:- ">{e.first_name}</td>
                    <td data-title="Last Name:- ">{e.last_name}</td>
                    <td data-title="Last Name:- ">{(e.division.area==="Ramna")? 'True':'False'}</td>
                    <td data-title="Division:- "><button className="btn-details"><Link to={`/profile/${e.id}`} state={{data:e}}>Details</Link></button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
            
        </div>
    );
};

export default Users;