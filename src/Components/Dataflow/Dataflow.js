import React from 'react';

const Dataflow = ({data}) => {
    return (
        <div>
            <tr>
                    <td data-title="First Name:- ">{data.firstName}</td>
                    <td data-title="Last Name:- ">{data.lastName}</td>
                    <td data-title="Division:- "><button class="btn"><a
                                href="./profile/profile.html">Details</a></button></td>
            </tr>
        </div>
    );
};

export default Dataflow;