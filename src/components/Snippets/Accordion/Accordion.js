/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, className, children, collapseOpen }) => {
    const [isOpen, setOpen] = useState(collapseOpen);

    return (
        <div className="accordion-wrapper">
            <div
                className={`${className} accordion-title ${isOpen ? 'open' : ''}`}
                onClick={() => setOpen(!isOpen)}
            >
                <p>{title}</p>
            </div>
            <div className={`accordion-content ${!isOpen ? 'collapsed' : ''}`}>{children}</div>
        </div>
    );
};

export default Accordion;
