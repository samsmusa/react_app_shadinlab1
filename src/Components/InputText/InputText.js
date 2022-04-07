import React from 'react';

const InputText = ({label,name,onchange, valuefor, error}) => {
    return (
        <div className="row">
            <div className="col-25">
                <label htmlFor={name}>{label}</label>
            </div>
            <div className="col-75">
                <input 
                id={name}
                name={name}
                type="text"
                value={valuefor}
                onChange={onchange}
                />
            </div>
            {error ? <div className='error-field'>{error}</div> : null}
        </div>
    );
};

export default InputText;