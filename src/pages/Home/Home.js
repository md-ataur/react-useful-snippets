/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Message from '../../components/Message/Message';
import SlideSidebar from '../../components/SlideSidebar/SlideSidebar';
import LinkButton from '../../components/Snippets/LinkButton/LinkButton';
import FAQ from '../FAQ/FAQ';
import './Home.css';

function Home() {
    const [showModal, setShowModal] = useState(false);
    const [showSideModal, setSideShowModal] = useState(false);

    const linkBtn = {
        text: 'View More',
        btnBG: '#444',
        btnColor: '#fff',
        link: 'https://google.com/',
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
                    <div className="accordion-area">
                        <h2>Accordion</h2>
                        <FAQ />
                    </div>
                    <div>
                        <h2>Modal</h2>
                        <button className="btn" onClick={() => setShowModal(true)}>
                            Message Modal
                        </button>
                        <button className="btn" onClick={() => setSideShowModal(true)}>
                            Sidebar Modal
                        </button>
                        <br />
                        <br />
                        <h2>Link button</h2>
                        <LinkButton linkBtn={linkBtn} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
