import React, { useState } from "react";
import Message from "../../components/Message/Message";
import MultipleSelect from "../../components/MultipleSelect/MultipleSelect";
import SlideSidebar from "../../components/SlideSidebar/SlideSidebar";
import LinkButton from "../../components/Snippets/LinkButton/LinkButton";
import FAQ from "../FAQ/FAQ";
import "./Home.css";

function Home() {
    const [showModal, setShowModal] = useState(false);
    const [showSideModal, setSideShowModal] = useState(false);

    const linkBtn = {
        text: "View More",
        btnBG: "#444",
        btnColor: "#fff",
        link: "https://google.com/",
    };

    return (
        <>
            {showModal && (
                <Message
                    title="Successfull"
                    subtitle="Your form has been submitted"
                    className="success"
                    onClose={() => setShowModal(false)}
                />
            )}

            {showSideModal && <SlideSidebar onClose={() => setSideShowModal(false)} />}
            <div className="container">
                <div className="section-one">
                    <div className="accordion-area mb-5">
                        <h2 className="text-lg font-bold">Accordion</h2>
                        <FAQ />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Modal</h2>
                        <button type="button" className="btn" onClick={() => setShowModal(true)}>
                            Message Modal
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => setSideShowModal(true)}
                        >
                            Sidebar Modal
                        </button>
                        <br />
                        <br />
                        <h2 className="text-lg font-bold">Link button</h2>
                        <LinkButton linkBtn={linkBtn} />
                        <br />
                        <div>
                            <h2 className="text-lg font-bold">Multiple selection</h2>
                            <MultipleSelect />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
