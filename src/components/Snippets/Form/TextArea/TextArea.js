import React from 'react';

const TextArea = ({ className, label, ...rest }) => {
    return (
        <div className={`${className} form-field`}>
            <label htmlFor={label}>{label}</label>
            <textarea {...rest}></textarea>
        </div>
    );
};

export default TextArea;
