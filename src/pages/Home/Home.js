import React from 'react';
import FAQ from '../FAQ/FAQ';
import './Home.css';

function Home() {
    return (
        <div className="container">
            <div className="accordion-area">
                <h2>Accordion</h2>
                <FAQ />
            </div>
        </div>
    );
}

export default Home;
