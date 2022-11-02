import './Button.css';

const Button = ({ className, children, ...rest }) => {
    return (
        <button {...rest} className={`${className} btn`}>
            {children}
        </button>
    );
};

export default Button;
