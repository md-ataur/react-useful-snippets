import msgIcon from '../../images/success-msg-icon.svg';
import MessageModal from '../Snippets/Modal/MessageModal/MessageModal';
import './Message.css';

const Message = ({ onClose, title, subtitle, className }) => {
    return (
        <MessageModal onClose={() => onClose()}>
            <div className={`${className}-alert-text`}>
                <img src={msgIcon} alt="" />
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </MessageModal>
    );
};

export default Message;
