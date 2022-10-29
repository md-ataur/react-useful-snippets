import React from 'react';
import Accordion from '../../components/Snippets/Accordion/Accordion';

const FAQ = () => {
    return (
        <div>
            <Accordion collapseOpen={false} className="faq" title="How can I open an account?">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi. Enim,
                    veniam optio. Rerum recusandae aspernatur quos nesciunt consectetur obcaecati!
                </p>
            </Accordion>
            <Accordion collapseOpen={false} className="faq" title="How can I apply?">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi. Enim,
                    veniam optio. Rerum recusandae aspernatur quos nesciunt consectetur obcaecati!
                </p>
            </Accordion>
            <Accordion collapseOpen={false} className="faq" title="Is this for young?">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi. Enim,
                    veniam optio. Rerum recusandae aspernatur quos nesciunt consectetur obcaecati!
                </p>
            </Accordion>
            <Accordion collapseOpen={false} className="faq" title="If I have a duplicate account">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi. Enim,
                    veniam optio. Rerum recusandae aspernatur quos nesciunt consectetur obcaecati!
                </p>
            </Accordion>
        </div>
    );
};

export default FAQ;
