import React from 'react';

const Dropdown = ({data,handleChange,change}) => {
    console.log(data)
    
    return (
        <div>
            <div className="row">
                    <div class="col-75">
                        <select id="division" name="division"
                       {...(change ? {onChange: handleChange} : {})}>
                            {
                                data.map(e=> <option value={e[1]}>{e[1]}</option>)
                            }
                        </select>
                    </div>
                    </div>
        </div>
    );
};

export default Dropdown;