import './LinkButton.css';

const LinkButton = ({ linkBtn }) => {
    const { text, btnBG, btnColor, link } = linkBtn;

    return (
        <div className="link-btn-div">
            <a
                href={link}
                target="__blank"
                style={{ background: btnBG, color: btnColor }}
                className="link-btn"
            >
                {text}
            </a>
        </div>
    );
};

export default LinkButton;
