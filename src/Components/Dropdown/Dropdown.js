import React from 'react';

const Dropdown = ({label, data,handleChangeDivision}) => {
    return (
        <div className="row">
                        
            <div className="col-25">
                <label htmlFor="subject">{label}</label>
            </div>
            <div className="col-75">
                <select id={label} name={label}
                    onChange={handleChangeDivision}>
                    
                    {
                       (label==='division')? data.map(e=> <option key={e._id} value={e.division}>{e.division}</option>) : data.map(e=> <option key={e._id} value={e.district}>{e.district}</option>)
                    }
                </select>
            </div>
        </div>
    );
};

export default Dropdown;