import { useState } from "react";
import { CgClose } from "react-icons/cg";
import "./SidebarModal.css";

const SidebarModal = ({ onClose, children }) => {
    const [closingModal, setClosingModal] = useState(false);

    const closeModal = () => {
        setClosingModal(true);
        setTimeout(() => {
            onClose();
        }, 190);
    };

    return (
        <div className="sidebar-modal" onClick={(e) => e.stopPropagation()}>
            <div
                className={`modal-full-content ${closingModal ? "close_modal" : ""}`}
                onClick={(e) => e.stopPropagation()} /* stop event bubbling */
            >
                <div className="modal-inner-content">
                    <div className="close-icon">
                        <span>
                            <CgClose onClick={() => closeModal()} />
                        </span>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default SidebarModal;
