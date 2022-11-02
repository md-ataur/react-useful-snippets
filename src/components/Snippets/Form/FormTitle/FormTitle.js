import React from 'react';

export default function FormTitle({ title, subtitle }) {
    return (
        <div className="form-title">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    );
}
