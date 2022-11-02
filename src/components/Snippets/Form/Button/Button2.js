import './Button2.css';

const Button2 = ({ className, children, ...rest }) => {
    return (
        <button {...rest} className={`${className} auth-form-button`}>
            {children}
        </button>
    );
};

export default Button2;
