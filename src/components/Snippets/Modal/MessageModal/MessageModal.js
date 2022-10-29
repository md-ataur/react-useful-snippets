/* eslint-disable jsx-a11y/no-static-element-interactions */
import { CgClose } from 'react-icons/cg';
import './MessageModal.css';

const MessageModal = ({ onClose, children }) => {
    return (
        <div className="message-modal" onClick={() => (onClose ? onClose() : '')}>
            <div
                className="message-modal-content"
                onClick={(e) => e.stopPropagation()} /* stop event bubbling */
            >
                <div className="close-icon">
                    <span>
                        <CgClose onClick={() => onClose()} />
                    </span>
                </div>
                {children}
            </div>
        </div>
    );
};

export default MessageModal;
