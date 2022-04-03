import React from 'react';
import { Link } from 'react-router-dom';
import './Users.css'

const Dataflow = ({datas}) => {
    console.log(datas)
    return (
        <div>
            <div class="flex-container">
        <table class="table">
            <thead class="thead">
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
            {
                datas.map(e=> <tr>
                    <td data-title="First Name:- ">{e.first_name}</td>
                    <td data-title="Last Name:- ">{e.last_name}</td>
                    <td data-title="Division:- "><button class="btn-details"><Link to={`/profile/${e.id}`} state={{data:e}}>Details</Link></button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
            
        </div>
    );
};

export default Dataflow;